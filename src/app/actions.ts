'use server';

import {serviceAdvisor} from '@/ai/flows/service-advisor';
import type {ServiceAdvisorInput, ServiceAdvisorOutput} from '@/lib/types';

/**
 * Server action to get AI-powered service recommendations.
 *
 * @param input - The vehicle details and user's description.
 * @returns A promise that resolves to the AI's recommendation.
 */
export async function getAiRecommendation(
  input: ServiceAdvisorInput
): Promise<ServiceAdvisorOutput> {
  // The try/catch is removed to let the original error propagate to the client component.
  // This provides more specific error messages on the UI.
  const recommendation = await serviceAdvisor(input);
  return recommendation;
}
