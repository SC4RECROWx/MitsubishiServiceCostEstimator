import {z} from 'zod';

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
  vehicleModel: z.string().describe('The model of the Mitsubishi vehicle (e.g., Xpander, Pajero Sport).'),
  vehicleYear: z.number().describe('The year of the vehicle (e.g., 2023).'),
  vehicleTrim: z.string().describe('The trim level of the vehicle (e.g., Exceed, Ultimate, Dakar).'),
  userDescription: z.string().describe('A brief description of the issue or desired service from the user.'),
});
export type ServiceAdvisorInput = z.infer<typeof ServiceAdvisorInputSchema>;

export const ServiceAdvisorOutputSchema = z.object({
  recommendedService: z.string().describe('The recommended service package or job name, exactly as written in the available services list.'),
  serviceDetails: z.string().describe('A detailed description of the recommended service, including items and parts. This is a user-facing explanation.'),
});
export type ServiceAdvisorOutput = z.infer<typeof ServiceAdvisorOutputSchema>;
