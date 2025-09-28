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
  try {
    const recommendation = await serviceAdvisor(input);
    return recommendation;
  } catch (error)
  {
    console.error('Error getting AI recommendation:', error);
    // Return a structured error response that the client can handle
    return {
      recommendedService: '',
      serviceDetails: `Terjadi kesalahan saat berkomunikasi dengan AI Service Advisor. Silakan coba lagi nanti. Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
