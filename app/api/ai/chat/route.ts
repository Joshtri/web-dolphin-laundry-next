import { streamText, type UIMessage, convertToModelMessages } from 'ai';
import { googleAI } from '@/app/providers/googleAI';
import { GoogleModel } from '@/enums/ai';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

async function fetchContextData() {
  try {
    const [perfumeRes, pricingRes] = await Promise.all([
      fetch(`${API_BASE}/perfumes`, { next: { revalidate: 300 } }),
      fetch(`${API_BASE}/pricing`, { next: { revalidate: 300 } }),
    ]);

    const perfumeData = await perfumeRes.json();
    const pricingData = await pricingRes.json();

    return { perfumes: perfumeData.data, pricing: pricingData.data };
  } catch {
    return { perfumes: null, pricing: null };
  }
}

function detectLanguage(messages: UIMessage[]): 'id' | 'en' {
  // Get the first user message
  const firstUserMessage = messages.find(m => m.role === 'user');
  if (!firstUserMessage) return 'id';

  // Extract text from message (handle different message structures)
  let text = '';
  if (typeof firstUserMessage === 'object') {
    // Check if it has text property or parts array
    if ('text' in firstUserMessage) {
      text = (firstUserMessage as any).text;
    } else if ('parts' in firstUserMessage) {
      const parts = (firstUserMessage as any).parts;
      if (Array.isArray(parts)) {
        text = parts.map((p: any) => p.text || '').join(' ');
      }
    }
  }

  // Check if the message contains English indicators
  const englishIndicators = ['what', 'how', 'when', 'where', 'why', 'which', 'are', 'is', 'price', 'laundry', 'perfume', 'service', 'hello', 'hi'];
  const textLower = text.toLowerCase();
  const englishMatches = englishIndicators.filter(word => textLower.includes(word)).length;

  // Check for Indonesian indicators
  const indonesianIndicators = ['apa', 'bagaimana', 'kapan', 'mana', 'mengapa', 'siapa', 'harga', 'cuci', 'parfum', 'layanan', 'berapa', 'selamat', 'halo'];
  const indonesianMatches = indonesianIndicators.filter(word => textLower.includes(word)).length;

  // If more English indicators found, use English
  return englishMatches > indonesianMatches ? 'en' : 'id';
}

function buildSystemPrompt(contextData: { perfumes: any; pricing: any }, language: 'id' | 'en' = 'id') {
  const { perfumes, pricing } = contextData;

  let perfumeContext = '';
  if (perfumes) {
    const perfumeList = perfumes.items.map((p: any) => {
      const cat = perfumes.categories.find((c: any) => c.id === p.categoryId);
      const tags = [
        p.popular && 'Popular',
        p.longLasting && 'Long Lasting',
        p.premium && 'Premium',
        p.fabricSafe && 'Fabric Safe',
      ].filter(Boolean).join(', ');
      return `- ${p.name} [${cat?.name || 'Unknown'}] (${tags})`;
    }).join('\n');

    perfumeContext = `
PERFUME CATALOG (${perfumes.items.length} perfumes, ${perfumes.categories.length} categories):
Categories: ${perfumes.categories.map((c: any) => c.name).join(', ')}

${perfumeList}
`;
  }

  let pricingContext = '';
  if (pricing) {
    pricingContext = `
PRICING & SERVICES:
${pricing.categories.map((cat: any) => {
      const items = pricing.items
        .filter((item: any) => item.categoryId === cat.id)
        .map((item: any) => {
          const price = parseFloat(item.price);
          const priceStr = price > 0 ? `Rp ${price.toLocaleString('id-ID')}/${item.unit}` : 'Price varies';
          const duration = item.durationText ? ` (${item.durationText})` : '';
          const notes = item.notes ? ` [${item.notes}]` : '';
          return `  - ${item.name}: ${priceStr}${duration}${notes}`;
        }).join('\n');
      return `${cat.name} - ${cat.description}:\n${items}`;
    }).join('\n\n')}
`;
  }

  const isEnglish = language === 'en';

  return `You are Dolphin Assistant, a friendly and knowledgeable AI assistant for Dolphin Laundry & Dry Cleaning in Kupang, Indonesia.

ABOUT DOLPHIN LAUNDRY:
- Located at Jl. R. W. Monginsidi I No.2, Pasir Panjang, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Timur
- Open every day: 05:45 - 22:00 WITA
- Key differentiators: FREE premium perfume (customer chooses from 34+ options), clothes washed SEPARATELY (not mixed with others)
- Contact via WhatsApp for ordering and pickup/delivery service

${perfumeContext}
${pricingContext}

INSTRUCTIONS:
- Be friendly, helpful, and concise
- **IMPORTANT: Respond ONLY in ${isEnglish ? 'ENGLISH' : 'INDONESIAN'}. Do not mix languages. The user is speaking ${isEnglish ? 'English' : 'Indonesian'}.**
- When recommending perfumes, use the actual catalog data above
- When discussing prices, use the actual pricing data above — always mention the currency (Rp)
- Highlight unique selling points: free perfume choice and separate washing
- If asked about something not in the data, politely explain what services are available
- Keep responses short and conversational (2-3 short paragraphs max)
- Do not use markdown headers. Use simple text with occasional **bold** for emphasis or bullet points with dashes (-)
- Always be enthusiastic about the perfume selection — it's the brand's pride
`;
}

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: UIMessage[] };

  const contextData = await fetchContextData();
  const detectedLanguage = detectLanguage(messages);
  const systemPrompt = buildSystemPrompt(contextData, detectedLanguage);

  const result = streamText({
    model: googleAI(GoogleModel.GEMINI_25_FLASH),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
