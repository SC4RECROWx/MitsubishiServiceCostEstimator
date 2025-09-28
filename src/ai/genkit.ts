import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Initialize Genkit and the Google AI plugin.
// The plugin will automatically look for the GEMINI_API_KEY in the environment variables.
export const ai = genkit({
  plugins: [
    googleAI({ apiVersion: 'v1' }),
  ],
});
