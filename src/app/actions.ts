'use server';

import {serviceAdvisor} from '@/ai/flows/service-advisor';
import type {ServiceAdvisorInput, ServiceAdvisorOutput} from '@/lib/types';

/**
 * Server action to get AI-powered service recommendations.
 *
 * @param input - The vehicle details and user's description.
 * @returns A promise that resolves to the AI's recommendation.
 */
export async function getAiRecommendation(input: ServiceAdvisorInput): Promise<ServiceAdvisorOutput> {
  // We remove the try/catch block to allow the original error to propagate to the client component.
  // This provides more specific and useful error messages on the UI if something goes wrong.
  const recommendation = await serviceAdvisor(input);
  return recommendation;
}
