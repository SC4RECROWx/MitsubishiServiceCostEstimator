'use server';
/**
 * @fileOverview AI flow for providing service recommendations.
 *
 * - serviceAdvisor - A function that recommends services based on user complaints.
 */
import {ai} from '@/ai/genkit';
import {
  ServiceAdvisorInput,
  ServiceAdvisorInputSchema,
  ServiceAdvisorOutput,
  ServiceAdvisorOutputSchema,
} from '@/lib/types';

// Define the AI prompt for the service advisor.
const advisorPrompt = ai.definePrompt({
  name: 'serviceAdvisorPrompt',
  input: {schema: ServiceAdvisorInputSchema},
  output: {schema: ServiceAdvisorOutputSchema},
  prompt: `Anda adalah Service Advisor ahli untuk bengkel Mitsubishi.
Tugas Anda adalah menganalisis keluhan pelanggan dan merekomendasikan paket servis atau pekerjaan yang paling relevan dari daftar yang tersedia.

Keluhan Pelanggan:
"{{{userComplaint}}}"

Daftar Servis yang Tersedia (ID dan Nama):
{{#each availableServices}}
- ID: {{this.id}}, Nama: {{this.name}}
{{/each}}

Berdasarkan keluhan pelanggan, identifikasi SATU atau LEBIH servis dari daftar di atas yang paling sesuai untuk mengatasi masalah tersebut.

Berikan jawaban Anda dalam format JSON yang valid, dengan menyertakan:
1. 'recommendedServiceIds': Sebuah array berisi ID dari servis yang Anda rekomendasikan.
2. 'reasoning': Penjelasan singkat dan jelas dalam Bahasa Indonesia mengapa Anda merekomendasikan servis tersebut.

Penting:
- Hanya pilih ID dari daftar yang tersedia.
- Jika keluhan tidak jelas atau di luar cakupan servis yang ada, berikan alasan di 'reasoning' dan biarkan 'recommendedServiceIds' menjadi array kosong.
- Fokus pada solusi yang paling mungkin. Misalnya, jika keluhan tentang "rem berbunyi", rekomendasikan servis yang berkaitan dengan rem.`,
});

// Define the main flow for the service advisor.
const serviceAdvisorFlow = ai.defineFlow(
  {
    name: 'serviceAdvisorFlow',
    inputSchema: ServiceAdvisorInputSchema,
    outputSchema: ServiceAdvisorOutputSchema,
  },
  async (input: ServiceAdvisorInput) => {
    // Generate content based on the prompt and input.
    const {output} = await advisorPrompt(input, {model: 'gemini-pro'});
    return output!;
  }
);

/**
 * Recommends vehicle services based on a user's complaint.
 * This is the main function to be called from server actions.
 * @param input The user's complaint and list of available services.
 * @returns A promise that resolves to the recommended services and reasoning.
 */
export async function serviceAdvisor(input: ServiceAdvisorInput): Promise<ServiceAdvisorOutput> {
  return serviceAdvisorFlow(input);
}
