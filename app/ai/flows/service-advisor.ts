'use server';
/**
 * @fileoverview A service advisor AI flow that suggests maintenance services based on customer complaints.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/googleai';

// Define the input schema for the service advisor flow.
export const SuggestionInputSchema = z.object({
  vehicle: z.string().describe('The vehicle model, year, and trim. (e.g., "Xpander 2024 Ultimate CVT")'),
  complaint: z.string().describe('The customer\'s complaint about their vehicle.'),
  availableServices: z.array(z.string()).describe('A list of available service names for the specified vehicle.'),
});
export type SuggestionInput = z.infer<typeof SuggestionInputSchema>;

// Define the output schema for the service advisor flow.
export const SuggestionOutputSchema = z.object({
  serviceName: z.string().nullable().describe('The name of the single most relevant service from the provided list. Must be an exact match from the list or null if no specific service is a clear match.'),
});
export type SuggestionOutput = z.infer<typeof SuggestionOutputSchema>;

// Define the prompt for the AI model.
const serviceAdvisorPrompt = ai.definePrompt({
    name: 'serviceAdvisorPrompt',
    input: { schema: SuggestionInputSchema },
    output: { schema: SuggestionOutputSchema },
    prompt: `You are a helpful Mitsubishi service advisor.
    A customer has a '{{vehicle}}' and complains about '{{complaint}}'.
    Based on their complaint, suggest the single most relevant service from the following list.
    Your response MUST be an exact match from one of the names in the list provided. Do not invent a new service.
    If the complaint is vague (e.g., "sudah waktunya service"), you can recommend a basic service like "Pahe 2: Ganti Oli + Filter Oli".
    If no service is a clear match, respond with null.
    
    Available Services:
    {{#each availableServices}}
    - {{this}}
    {{/each}}
    `,
    config: {
        model: googleAI.model('gemini-1.5-flash-latest'),
    }
});


// Define the main flow for suggesting a service.
export const suggestServiceFlow = ai.defineFlow(
  {
    name: 'suggestServiceFlow',
    inputSchema: SuggestionInputSchema,
    outputSchema: SuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await serviceAdvisorPrompt(input);
    return output!;
  }
);

// Wrapper function to be called from server actions.
export async function suggestService(input: SuggestionInput): Promise<SuggestionOutput> {
  return await suggestServiceFlow(input);
}
