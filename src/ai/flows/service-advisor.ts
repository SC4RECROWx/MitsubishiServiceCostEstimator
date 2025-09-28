'use server';

/**
 * @fileOverview A service advisor AI agent for Mitsubishi vehicles.
 *
 * - suggestService: A function that handles the service suggestion process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {
  ServiceAdvisorInputSchema,
  ServiceAdvisorOutputSchema,
  type ServiceAdvisorInput,
  type ServiceAdvisorOutput,
} from '@/lib/types';
import {googleAI} from '@genkit-ai/googleai';
import { periodicServices, additionalServices, tyreServices, acAndEngineServices } from '@/lib/data/services';

// Wrapper function to be called by the server action
export async function suggestService(
  input: ServiceAdvisorInput
): Promise<ServiceAdvisorOutput> {
  return serviceAdvisorFlow(input);
}

// Define the Genkit prompt
const serviceAdvisorPrompt = ai.definePrompt({
  name: 'serviceAdvisorPrompt',
  input: {schema: ServiceAdvisorInputSchema},
  output: {schema: ServiceAdvisorOutputSchema},
  model: googleAI.model('gemini-pro'),
  prompt: `Anda adalah AI Service Advisor untuk bengkel resmi Mitsubishi. Tugas Anda adalah memberikan rekomendasi servis kepada pelanggan berdasarkan keluhan mereka.

Informasi Kendaraan Pelanggan:
- Model: {{vehicleModel}} {{vehicleYear}} ({{vehicleTrim}})
- Keluhan Pelanggan: "{{userDescription}}"

Daftar Servis yang Tersedia:
- Paket Servis Berkala: ${periodicServices.map(s => `"${s.name}"`).join(', ')}
- Pekerjaan Tambahan: ${additionalServices.map(s => `"${s.name}"`).join(', ')}
- Perawatan Roda & Ban: ${tyreServices.map(s => `"${s.name}"`).join(', ')}
- Perawatan AC & Mesin: ${acAndEngineServices.map(s => `"${s.name}"`).join(', ')}

Tugas Anda:
1.  Analisis keluhan pelanggan.
2.  Pilih SATU nama servis yang PALING SESUAI dari daftar di atas. Tuliskan nama servis tersebut **PERSIS** seperti yang ada di daftar ke dalam field 'recommendedService'.
3.  Berikan penjelasan yang singkat, ramah, dan mudah dimengerti kepada pelanggan mengapa Anda merekomendasikan servis tersebut. Masukkan penjelasan ini ke dalam field 'serviceDetails'. Jelaskan juga secara singkat apa saja yang dikerjakan dalam servis tersebut jika relevan.`,
});

// Define the Genkit flow
const serviceAdvisorFlow = ai.defineFlow(
  {
    name: 'serviceAdvisorFlow',
    inputSchema: ServiceAdvisorInputSchema,
    outputSchema: ServiceAdvisorOutputSchema,
  },
  async input => {
    const {output} = await serviceAdvisorPrompt(input);
    if (!output) {
      throw new Error('AI Service Advisor failed to generate a response.');
    }
    return output;
  }
);
