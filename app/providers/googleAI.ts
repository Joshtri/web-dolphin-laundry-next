import { GoogleModel } from '@/enums/ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';


export type GoogleModelId = typeof GoogleModel[keyof typeof GoogleModel];

export const googleAI = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_AI_API_KEY!,
});
