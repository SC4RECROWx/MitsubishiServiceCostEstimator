import type { PeriodicService, AdditionalService } from "@/lib/types";

export const periodicServices: PeriodicService[] = [
  // Pahe Services for Xpander
  {
    id: "xp-pahe-1",
    vehicleModelId: "xpander",
    name: "Pahe 1: Ganti Oli",
    mileage: 0, // Not based on mileage anymore
    jobs: [{ description: "Jasa Ganti Oli", cost: 80000 }],
    parts: [{ partId: "xp-engine-oil", quantity: 1 }],
  },
  {
    id: "xp-pahe-2",
    vehicleModelId: "xpander",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli & Filter Oli", cost: 97000 }],
    parts: [
      { partId: "xp-engine-oil", quantity: 1 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "xp-pahe-3",
    vehicleModelId: "xpander",
    name: "Pahe 3: Ganti Oli + Filter Oli & AC",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli, Filter Oli & AC", cost: 152000 }],
    parts: [
      { partId: "xp-engine-oil", quantity: 1 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "xp-ac-filter", quantity: 1 },
    ],
  },
  {
    id: "xp-pahe-4",
    vehicleModelId: "xpander",
    name: "Pahe 4: Paket Lengkap + Engine Flush",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli, Filter Oli & AC", cost: 152000 },
        { description: "Engine Flush", cost: 150000 },
    ],
    parts: [
      { partId: "xp-engine-oil", quantity: 1 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "xp-ac-filter", quantity: 1 },
    ],
  },
  // Pahe Services for Pajero Sport
  {
    id: "ps-pahe-1",
    vehicleModelId: "pajero-sport",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli", cost: 108000 }],
    parts: [{ partId: "ps-engine-oil", quantity: 1 }],
  },
  {
    id: "ps-pahe-2",
    vehicleModelId: "pajero-sport",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli & Filter Oli", cost: 143000 }],
    parts: [
      { partId: "ps-engine-oil", quantity: 1 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-pahe-3",
    vehicleModelId: "pajero-sport",
    name: "Pahe 3: Ganti Oli + Filter Oli & AC",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli, Filter Oli & AC", cost: 198000 }],
    parts: [
      { partId: "ps-engine-oil", quantity: 1 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-drain-plug-gasket", quantity: 1 },
      { partId: "ps-ac-filter", quantity: 1 },
    ],
  },
  {
    id: "ps-pahe-4",
    vehicleModelId: "pajero-sport",
    name: "Pahe 4: Paket Lengkap + Engine Flush",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli, Filter Oli & AC", cost: 198000 },
        { description: "Engine Flush", cost: 200000 },
    ],
    parts: [
      { partId: "ps-engine-oil", quantity: 1 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-drain-plug-gasket", quantity: 1 },
      { partId: "ps-ac-filter", quantity: 1 },
    ],
  },
  // Pahe Services for Xforce
  {
    id: "xf-pahe-2",
    vehicleModelId: "xforce",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli & Filter Oli", cost: 97000 }],
    parts: [
      { partId: "xf-engine-oil", quantity: 1 },
      { partId: "xf-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 }, // Using Xpander's gasket
    ],
  },
  // Pahe Services for Outlander Sport
  {
    id: "os-pahe-2",
    vehicleModelId: "outlander-sport",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli & Filter Oli", cost: 110000 }],
    parts: [
      { partId: "os-engine-oil", quantity: 1 },
      { partId: "os-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 }, // Assuming gasket is similar
    ],
  },
  // Pahe Services for Mirage
  {
    id: "mr-pahe-2",
    vehicleModelId: "mirage",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli & Filter Oli", cost: 75000 }],
    parts: [
      { partId: "mr-engine-oil", quantity: 1 },
      { partId: "mr-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 }, // Assuming gasket is similar
    ],
  },
  // Pahe Services for L300
  {
    id: "l300-pahe-1",
    vehicleModelId: "l300",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli", cost: 70000 }],
    parts: [
      { partId: "l300-engine-oil", quantity: 1 },
    ],
  },
  {
    id: "l300-pahe-2",
    vehicleModelId: "l300",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli & Filter Oli", cost: 85000 }],
    parts: [
      { partId: "l300-engine-oil", quantity: 1 },
      { partId: "l300-oil-filter", quantity: 1 },
      { partId: "l300-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "l300-pahe-3",
    vehicleModelId: "l300",
    name: "Pahe 3: Lengkap (Oli, Filter Oli, Filter Solar)",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli, Filter Oli & Filter Solar", cost: 125000 }],
    parts: [
      { partId: "l300-engine-oil", quantity: 1 },
      { partId: "l300-oil-filter", quantity: 1 },
      { partId: "l300-drain-plug-gasket", quantity: 1 },
      { partId: "l300-fuel-filter", quantity: 1 },
    ],
  },
];


export const additionalServices: AdditionalService[] = [
  {
    id: "add-brake-pad-front-xp",
    name: "Ganti Kampas Rem Depan - Xpander",
    applicableModels: ["xpander"],
    job: { description: "Jasa Ganti Kampas Rem Depan", cost: 150000 },
    parts: [{ partId: "xp-brake-pad-front", quantity: 1 }],
  },
  {
    id: "add-brake-pad-front-ps",
    name: "Ganti Kampas Rem Depan - All New Pajero Sport",
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Ganti Kampas Rem Depan", cost: 200000 },
    parts: [{ partId: "ps-brake-pad-front", quantity: 1 }],
  },
  {
    id: "add-brake-pad-rear-xp",
    name: "Ganti Kampas Rem Belakang - Xpander",
    applicableModels: ["xpander"],
    job: { description: "Jasa Ganti Kampas Rem Belakang", cost: 150000 },
    parts: [{ partId: "xp-brake-shoe-rear", quantity: 1 }],
  },
  {
    id: "add-brake-pad-rear-ps",
    name: "Ganti Kampas Rem Belakang - All New Pajero Sport",
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Ganti Kampas Rem Belakang", cost: 200000 },
    parts: [{ partId: "ps-brake-pad-rear", quantity: 1 }],
  },
  {
    id: "add-battery-xp",
    name: "Ganti Aki - Xpander",
    applicableModels: ["xpander"],
    job: { description: "Jasa Ganti Aki", cost: 75000 },
    parts: [{ partId: "xp-battery", quantity: 1 }],
  },
  {
    id: "add-battery-ps",
    name: "Ganti Aki - All New Pajero Sport",
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Ganti Aki", cost: 100000 },
    parts: [{ partId: "ps-battery", quantity: 1 }],
  },
  {
    id: "add-spooring-balancing",
    name: "Spooring & Balancing",
    applicableModels: ["xpander", "pajero-sport", "triton", "xforce", "outlander-sport", "mirage", "l300"],
    job: { description: "Jasa Spooring & Balancing", cost: 250000 },
    parts: [{ partId: "common-balancing-weight", quantity: 4 }],
  },
];
