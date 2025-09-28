import {z} from 'genkit';

export interface Vehicle {
  id: string;
  name: string;
  years: Array<{
    year: number;
    trims: string[];
  }>;
}

export interface SelectedVehicle {
  model: string;
  year: number;
  trim: string;
  modelName: string;
}

export interface Part {
  id: string;
  name: string;
  partNumber: string;
  price: number;
}

export interface ServiceJob {
  description: string;
  cost: number;
}

export interface ServicePart {
  partId: string;
  quantity: number;
}

export interface PeriodicService {
  id: string;
  vehicleModelId: string;
  name: string;
  mileage: number;
  jobs: ServiceJob[];
  parts: ServicePart[];
}

export interface AdditionalService {
  id: string;
  name: string;
  applicableModels: string[];
  job: ServiceJob;
  parts: ServicePart[];
}

export interface Accessory {
  id: string;
  name: string;
  price: number;
  applicableModels: string[];
  job: ServiceJob; // Installation job
}

export interface SelectedItem {
  name: string;
  partsCost: number;
  laborCost: number;
}

// AI Related types
export const ServiceAdvisorInputSchema = z.object({
  userComplaint: z.string().describe('Keluhan atau masalah yang dijelaskan oleh pengguna terkait kendaraannya.'),
  availableServices: z.array(z.object({
    id: z.string().describe('ID unik dari servis atau pekerjaan.'),
    name: z.string().describe('Nama deskriptif dari servis atau pekerjaan.'),
  })).describe('Daftar semua servis dan pekerjaan yang tersedia untuk model kendaraan yang dipilih.'),
});

export type ServiceAdvisorInput = z.infer<typeof ServiceAdvisorInputSchema>;

export const ServiceAdvisorOutputSchema = z.object({
  recommendedServiceIds: z.array(z.string()).describe('Daftar ID dari servis atau pekerjaan yang direkomendasikan.'),
  reasoning: z.string().describe('Penjelasan singkat dalam Bahasa Indonesia mengapa servis tersebut direkomendasikan, berdasarkan keluhan pengguna.'),
});

export type ServiceAdvisorOutput = z.infer<typeof ServiceAdvisorOutputSchema>;
