'use server';

/**
 * @fileOverview AI-powered service advisor for Mitsubishi vehicles.
 *
 * - serviceAdvisor - A function that suggests the appropriate service package based on vehicle details and user description.
 * - ServiceAdvisorInput - The input type for the serviceAdvisor function.
 * - ServiceAdvisorOutput - The return type for the serviceAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceAdvisorInputSchema = z.object({
  vehicleModel: z.string().describe('The model of the Mitsubishi vehicle (e.g., Xpander, Pajero Sport).'),
  vehicleYear: z.number().describe('The year of the vehicle (e.g., 2023).'),
  vehicleTrim: z.string().describe('The trim level of the vehicle (e.g., Exceed, Ultimate, Dakar).'),
  userDescription: z.string().describe('A brief description of the issue or desired service from the user.'),
});
export type ServiceAdvisorInput = z.infer<typeof ServiceAdvisorInputSchema>;

const ServiceAdvisorOutputSchema = z.object({
  recommendedService: z.string().describe('The recommended service package or job.'),
  serviceDetails: z.string().describe('A detailed description of the recommended service, including items and parts.'),
});
export type ServiceAdvisorOutput = z.infer<typeof ServiceAdvisorOutputSchema>;

export async function serviceAdvisor(input: ServiceAdvisorInput): Promise<ServiceAdvisorOutput> {
  return serviceAdvisorFlow(input);
}

const serviceAdvisorPrompt = ai.definePrompt({
  name: 'serviceAdvisorPrompt',
  input: { schema: ServiceAdvisorInputSchema },
  output: { schema: ServiceAdvisorOutputSchema },
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

2.  **Pahe 2: Ganti Oli + Filter Oli (Paket Umum)**
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

4.  **Spooring & Balancing**
    - Description: Meluruskan posisi roda dan menyeimbangkan putarannya.
    - Keywords: "setir getar", "mobil lari ke satu sisi", "spooring", "balancing", "setir miring", "ban makan sebelah", "mobil terasa limbung"

---

**Your Task:**
1.  **Analyze and Match:** Carefully read the "Customer's Complaint". Match it to the service (Packages or Additional Jobs) with the most relevant keywords.
2.  **Recommendation Logic:**
    - If the complaint specifically mentions "rem" without specifying front or back (e.g., "rem bunyi", "cek rem"), recommend "Ganti Kampas Rem Depan" as it's the more common wear item.
    - If the complaint clearly matches an "Additional Job", recommend that specific job.
    - If the complaint clearly matches a "Service Package", recommend that package.
    - If the complaint is general or mentions routine maintenance (e.g., "servis rutin", "cek mobil"), recommend "Pahe 2: Ganti Oli + Filter Oli (Paket Umum)" as it's the most essential service.
    - If the complaint is very vague and doesn't match anything (e.g., "mobil saya aneh", "tidak enak dipakai"), recommend "Pahe 2: Ganti Oli + Filter Oli (Paket Umum)" as a safe starting point for a check-up.
3.  **Format Output:** Provide the recommended service name and its description in the required JSON format.
`,
});

const serviceAdvisorFlow = ai.defineFlow(
  {
    name: 'serviceAdvisorFlow',
    inputSchema: ServiceAdvisorInputSchema,
    outputSchema: ServiceAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await serviceAdvisorPrompt(input);
    if (!output) {
      throw new Error('AI service did not return a valid response.');
    }
    return output;
  }
);
