"use server";

import { serviceAdvisor, type ServiceAdvisorInput } from "@/ai/flows/service-advisor";

export async function getServiceRecommendation(input: ServiceAdvisorInput) {
  try {
    const result = await serviceAdvisor(input);
    if (!result) {
        throw new Error("AI service returned an empty response.");
    }
    return { success: true, data: result };
  } catch (error) {
    console.error("Error getting service recommendation:", error);
    return { success: false, error: "AI Service Advisor error. Coba periksa API Key Anda atau coba lagi nanti." };
  }
}
