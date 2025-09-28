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
  } catch (error: any) {
    console.error('Error in getServiceSuggestion action:', error);
    // Re-throw the original error message to the client for debugging.
    throw new Error(error.message || 'An unknown server error occurred.');
  }
}
