'use server';

import { serviceAdvisor } from "@/ai/flows/service-advisor";
import type { ServiceAdvisorInput, ServiceAdvisorOutput } from "@/lib/types";

/**
 * A server action to get service recommendations from the AI service.
 * It's a wrapper around the `serviceAdvisor` flow.
 * It handles errors and returns a consistent response format.
 * @param input The input for the service advisor flow.
 * @returns An object with success status, data, and error message.
 */
export async function getServiceRecommendation(input: ServiceAdvisorInput): Promise<{
    success: boolean;
    data?: ServiceAdvisorOutput;
    error?: string;
}> {
    try {
        const result = await serviceAdvisor(input);
        if (!result) {
            throw new Error("AI service returned an empty response.");
        }
        return { success: true, data: result };
    } catch (e: any) {
        console.error("Error getting service recommendation:", e);
        // Provide a more user-friendly error message
        const errorMessage = e.message.includes('API key') 
            ? "Gagal terhubung ke layanan AI. Periksa kembali API Key Anda."
            : `Terjadi kesalahan: ${e.message}`;
        return { success: false, error: errorMessage };
    }
}
