import { generateText } from 'ai';
import { googleAI } from '@/app/providers/googleAI';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    const { text, usage } = await generateText({
      model: googleAI('gemini-2.0-flash'),
      prompt: prompt || 'Write a short story about a robot learning to love.',
    });

    return NextResponse.json({ text, usage });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}
