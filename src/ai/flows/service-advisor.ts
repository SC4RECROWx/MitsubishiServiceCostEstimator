'use server';

/**
 * @fileOverview AI-powered service advisor for Mitsubishi vehicles.
 * This file contains the Genkit flow that analyzes user input and recommends a vehicle service.
 */

import {ai} from '@/ai/genkit';
import {ServiceAdvisorInputSchema, ServiceAdvisorOutputSchema} from '@/lib/types';
import type {ServiceAdvisorInput, ServiceAdvisorOutput} from '@/lib/types';

export async function serviceAdvisor(input: ServiceAdvisorInput): Promise<ServiceAdvisorOutput> {
  return serviceAdvisorFlow(input);
}

const advisorPrompt = ai.definePrompt({
  name: 'serviceAdvisorPrompt',
  input: {schema: ServiceAdvisorInputSchema},
  output: {schema: ServiceAdvisorOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert and friendly Mitsubishi service advisor in Indonesia. Your goal is to analyze a customer's complaint and recommend the most appropriate service from the list below.

Vehicle Information:
- Model: {{{vehicleModel}}}
- Year: {{{vehicleYear}}}
- Trim: {{{vehicleTrim}}}
- Customer's Complaint: {{{userDescription}}}

Analyze the user's complaint and match it to one of the following services based on the associated keywords.

---

**Available Service Packages:**

1.  **Pahe 1: Ganti Oli**
    - Description: Penggantian oli mesin saja.
    - Keywords: "ganti oli", "ganti oli saja", "cuma ganti oli", "oli mesin"

2.  **Pahe 2: Ganti Oli + Filter Oli**
    - Description: Paket servis paling umum, meliputi penggantian oli dan filternya.
    - Keywords: "servis rutin", "servis berkala", "cek semua", "perawatan", "ganti oli dan filter", "service ringan", "general checkup", "cek mobil"

3.  **Pahe 3: Ganti Oli + Filter Oli & AC**
    - Description: Paket servis dengan tambahan pembersihan atau penggantian filter AC.
    - Keywords: "AC bau", "AC tidak dingin", "filter AC", "service ac", "ac kotor", "angin ac lemah"

4.  **Pahe 4: Paket Lengkap + Engine Flush**
    - Description: Paket servis paling lengkap untuk membersihkan mesin secara menyeluruh.
    - Keywords: "servis besar", "full service", "mesin brebet", "mesin kasar", "engine flush", "performa menurun", "kurang tenaga", "tarikan berat"

---

**Available Additional Jobs:**

1.  **Ganti Kampas Rem Depan**
    - Description: Penggantian kampas rem bagian depan.
    - Keywords: "rem depan bunyi", "rem depan berdecit", "rem depan tidak pakem", "ganti kampas rem depan"

2.  **Ganti Kampas Rem Belakang**
    - Description: Penggantian kampas rem bagian belakang.
    - Keywords: "rem belakang bunyi", "rem belakang berdecit", "rem belakang tidak pakem", "ganti kampas rem belakang", "rem tangan kurang pakem"

3.  **Ganti Aki**
    - Description: Penggantian aki mobil.
    - Keywords: "mobil tidak mau start", "aki soak", "ganti aki", "sulit starter", "kelistrikan mati", "accu", "susah nyala"

4.  **Spooring**
    - Description: Meluruskan posisi keempat roda sesuai spesifikasi.
    - Keywords: "setir miring", "mobil lari ke satu sisi", "ban makan sebelah", "mobil terasa limbung", "spooring"

5.  **Balancing Roda (R13-R16)**
    - Description: Menyeimbangkan putaran roda agar tidak bergetar untuk mobil kecil.
    - Keywords: "setir getar", "roda getar", "balancing"

6.  **Balancing Roda (R17 & Offroad)**
    - Description: Menyeimbangkan putaran roda agar tidak bergetar untuk mobil besar/SUV.
    - Keywords: "setir getar", "roda getar", "balancing"

---

**Your Task:**
1.  **Analyze and Match:** Carefully read the "Customer's Complaint". Match it to the service (Packages or Additional Jobs) with the most relevant keywords.
2.  **Recommendation Logic:**
    - If the complaint mentions "rem" without specifying front or back (e.g., "rem bunyi", "cek rem"), recommend "Ganti Kampas Rem Depan" as it's the more common wear item.
    - If the complaint mentions "getar" (vibration), you must determine which balancing service to recommend based on the vehicle model. If the model is 'Pajero Sport' or 'Triton', recommend "Balancing Roda (R17 & Offroad)". For all other models, recommend "Balancing Roda (R13-R16)".
    - If the complaint mentions "setir miring" AND "getar", recommend "Spooring" and the appropriate "Balancing Roda" service. Combine them in the output: recommend "Spooring & Balancing" and in the details explain both are needed.
    - If the complaint is general or mentions routine maintenance (e.g., "servis rutin", "cek mobil"), recommend "Pahe 2: Ganti Oli + Filter Oli".
    - If the complaint is very vague and doesn't match anything (e.g., "mobil saya aneh", "tidak enak dipakai"), recommend "Pahe 2: Ganti Oli + Filter Oli" as a safe starting point for a check-up.
3.  **Format Output:** Provide the exact recommended service name in 'recommendedService' and a friendly explanation in 'serviceDetails'.
`,
});

const serviceAdvisorFlow = ai.defineFlow(
  {
    name: 'serviceAdvisorFlow',
    inputSchema: ServiceAdvisorInputSchema,
    outputSchema: ServiceAdvisorOutputSchema,
  },
  async (input) => {
    const {output} = await advisorPrompt(input);
    if (!output) {
      throw new Error('AI service did not return a valid response.');
    }

    // Post-processing to select the correct balancing service if AI recommends the generic term
    if (output.recommendedService.toLowerCase().includes('balancing')) {
      // If the AI recommended Spooring & Balancing, keep it
      if (output.recommendedService.toLowerCase().includes('spooring')) {
        // No change needed, the name is combined
      } else {
        const vehicleModel = input.vehicleModel.toLowerCase();
        if (vehicleModel.includes('pajero') || vehicleModel.includes('triton')) {
          output.recommendedService = 'Balancing Roda (R17 & Offroad)';
        } else {
          output.recommendedService = 'Balancing Roda (R13-R16)';
        }
      }
    }

    return output;
  }
);
