import { generateText } from 'ai';
import { googleAI } from '@/app/providers/googleAI';





const { text, usage, totalUsage } = await generateText({
    model: googleAI('gemini-2.0-flash'),
    prompt: 'Write a short story about a robot learning to love.',
})