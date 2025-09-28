/**
 * @fileoverview This file configures the Genkit AI framework.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is automatically read from the GEMINI_API_KEY environment variable.
    }),
  ],
});
