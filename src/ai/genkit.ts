'use server';
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import next from '@genkit-ai/next';
import {config} from 'dotenv';

config();

export const ai = genkit({
  plugins: [
    next(),
    googleAI({
      // apiKey: process.env.GEMINI_API_KEY, // API key is picked up from environment automatically
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
