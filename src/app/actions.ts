"use server";

import { serviceAdvisor, type ServiceAdvisorInput } from "@/ai/flows/service-advisor";

export async function getServiceRecommendation(input: ServiceAdvisorInput) {
  try {
    const result = await serviceAdvisor(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error getting service recommendation:", error);
    return { success: false, error: "Failed to get recommendation from AI service." };
  }
}
