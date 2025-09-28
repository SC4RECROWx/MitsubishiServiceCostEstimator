'use server';

import { suggestService } from '@/ai/flows/service-advisor';
import type { ServiceAdvisorInput, ServiceAdvisorOutput } from '@/lib/types';

/**
 * Server action to get service suggestion from the AI Service Advisor.
 * @param input - The vehicle details and user's complaint.
 * @returns The service recommendation from the AI.
 */
export async function getServiceSuggestion(
  input: ServiceAdvisorInput
): Promise<ServiceAdvisorOutput> {
  try {
    const recommendation = await suggestService(input);
    return recommendation;
  } catch (error) {
    console.error('Error in getServiceSuggestion action:', error);
    // Re-throw a generic error to the client to avoid leaking implementation details
    throw new Error('An error occurred while communicating with the AI Service Advisor. Please try again later.');
  }
}
