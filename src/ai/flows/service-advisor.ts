'use server';

/**
 * @fileOverview AI-powered service advisor for Mitsubishi vehicles.
 *
 * - serviceAdvisor - A function that suggests the appropriate service package based on vehicle details and user description.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { ServiceAdvisorInputSchema, ServiceAdvisorOutputSchema, type ServiceAdvisorInput, type ServiceAdvisorOutput } from '@/lib/types';


export async function serviceAdvisor(input: ServiceAdvisorInput): Promise<ServiceAdvisorOutput> {
  return serviceAdvisorFlow(input);
}

const serviceAdvisorPrompt = ai.definePrompt({
  name: 'serviceAdvisorPrompt',
  input: { schema: ServiceAdvisorInputSchema },
  output: { schema: ServiceAdvisorOutputSchema },
  model: 'gemini-pro',
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
    - Keywords: "filter AC", "service ac", "ac kotor"

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

5.  **Balancing Roda**
    - Description: Menyeimbangkan putaran roda agar tidak bergetar.
    - Keywords: "setir getar", "roda getar", "balancing"

6.  **Kuras Nitrogen**
    - Description: Mengisi ulang ban dengan angin nitrogen.
    - Keywords: "isi nitrogen", "kuras nitrogen", "angin ban", "tekanan ban"

---

**Available AC & Engine Services:**

1. **AC FRESH RINGAN (SINGLE BLOWER)** / **AC FRESH RINGAN (DOUBLE BLOWER)**
   - Description: Pembersihan ringan sistem AC.
   - Keywords: "ac bau apek", "ac kurang sejuk", "perawatan ac ringan"

2. **AC CLEAN**
   - Description: Pembersihan mendalam evaporator AC.
   - Keywords: "ac kotor", "debu di ac", "pembersihan evaporator"

3. **AC CARE**
   - Description: Perawatan dan pengecekan komponen AC.
   - Keywords: "cek ac", "perawatan ac"

4. **AC FRESH (SINGLE BLOWER)** / **AC FRESH (DOUBLE BLOWER)**
   - Description: Paket perawatan AC lengkap termasuk pembersihan dan disinfektan.
   - Keywords: "AC bau", "AC tidak dingin", "service ac lengkap"

5. **AIR SANITIZER/FOGGING**
   - Description: Disinfeksi kabin mobil dengan metode fogging.
   - Keywords: "fogging mobil", "bunuh kuman di kabin", "udara segar"

6. **OLI KOMPRESOR - SINGLE (JASA FREON & OLI)** / **OLI KOMPRESOR - DOUBLE (JASA FREON & OLI)**
   - Description: Penggantian oli kompresor AC.
   - Keywords: "ganti oli kompresor ac", "kompresor berisik"

7. **ENGINE CLEAN**
    - Description: Pembersihan ruang mesin.
    - Keywords: "bersihkan mesin", "ruang mesin kotor", "engine clean"

---

**Your Task:**
1.  **Analyze and Match:** Carefully read the "Customer's Complaint". Match it to the service (Packages, Additional Jobs, or AC/Engine) with the most relevant keywords.
2.  **Recommendation Logic:**
    - If the complaint mentions "rem" without specifying front or back (e.g., "rem bunyi", "cek rem"), recommend "Ganti Kampas Rem Depan" as it's the more common wear item.
    - If the complaint mentions "getar" (vibration), recommend "Balancing Roda" as the primary solution.
    - If the complaint mentions both "setir miring" and "getar", you can suggest "Spooring" and "Balancing Roda". For the output, combine them into one recommendation: "Spooring & Balancing".
    - If the complaint clearly matches a "Service Package", recommend that package.
    - For AC services with Single/Double blower options, just recommend the base name (e.g., "AC FRESH RINGAN"). The app will handle the specific type.
    - If the complaint is about AC (e.g., "AC bau", "AC tidak dingin"), recommend the most relevant AC service. If general, "AC FRESH RINGAN" is a good start.
    - If the complaint is general or mentions routine maintenance (e.g., "servis rutin", "cek mobil"), recommend "Pahe 2: Ganti Oli + Filter Oli" as it's the most essential service.
    - If the complaint is very vague and doesn't match anything (e.g., "mobil saya aneh", "tidak enak dipakai"), recommend "Pahe 2: Ganti Oli + Filter Oli" as a safe starting point for a check-up.
3.  **Format Output:** Provide the recommended service name and its description in the required JSON format. For Balancing, just use "Balancing Roda". The application will select the correct type.
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
    
    // Post-processing to select the correct balancing service
    if (output.recommendedService.toLowerCase().includes('balancing')) {
        const vehicleModel = input.vehicleModel.toLowerCase();
        if (vehicleModel.includes('pajero') || vehicleModel.includes('triton')) {
            output.recommendedService = "Balancing Roda (R17 & Offroad)";
        } else {
            output.recommendedService = "Balancing Roda (R13-R16)";
        }
    }


    return output;
  }
);
