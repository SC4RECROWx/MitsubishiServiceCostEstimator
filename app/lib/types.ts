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
  transmisi: string;
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
