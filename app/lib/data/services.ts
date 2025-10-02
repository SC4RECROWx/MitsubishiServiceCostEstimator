import type { PeriodicService, AdditionalService } from "@/lib/types";

export const periodicServices: PeriodicService[] = [
  // Pahe Services for Xpander
  {
    id: "xp-pahe-1",
    vehicleModelId: "xpander",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
    ],
    parts: [
        { partId: "xp-engine-oil-1l", quantity: 4 },
        { partId: "xp-drain-plug-gasket", quantity: 1 }
    ],
  },
  {
    id: "xp-pahe-2",
    vehicleModelId: "xpander",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Saringan Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "xp-pahe-3",
    vehicleModelId: "xpander",
    name: "Pahe 3: Ganti Oli + Filter Oli & AC",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Saringan Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
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
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Saringan Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "xp-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
    ],
  },
  // Pahe Services for Pajero Sport
  {
    id: "ps-pahe-1",
    vehicleModelId: "pajero-sport",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 108000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
    parts: [{ partId: "ps-engine-oil", quantity: 1 }],
  },
  {
    id: "ps-pahe-2",
    vehicleModelId: "pajero-sport",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli & Filter Oli", cost: 143000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
    jobs: [
        { description: "Jasa Ganti Oli, Filter Oli & AC", cost: 198000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
        { description: "Jasa Pengecekan Umum", cost: 50000 }
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
    jobs: [
        { description: "Jasa Ganti Oli & Filter Oli", cost: 97000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
    jobs: [
        { description: "Jasa Ganti Oli & Filter Oli", cost: 110000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
    jobs: [
        { description: "Jasa Ganti Oli & Filter Oli", cost: 75000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
    jobs: [
        { description: "Jasa Ganti Oli", cost: 70000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
    parts: [
      { partId: "l300-engine-oil", quantity: 1 },
    ],
  },
  {
    id: "l300-pahe-2",
    vehicleModelId: "l300",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli & Filter Oli", cost: 85000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
    jobs: [
        { description: "Jasa Ganti Oli, Filter Oli & Filter Solar", cost: 125000 },
        { description: "Jasa Pengecekan Umum", cost: 50000 }
    ],
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
];

export const tyreServices: AdditionalService[] = [
  {
    id: "add-spooring",
    name: "Spooring",
    applicableModels: ["xpander", "pajero-sport", "triton", "xforce", "outlander-sport", "mirage", "l300"],
    job: { description: "Jasa Spooring", cost: 133200 },
    parts: [],
  },
  {
    id: "add-balancing-r13-16",
    name: "Balancing Roda (R13-R16)",
    applicableModels: ["xpander", "mirage", "l300", "xforce", "outlander-sport"],
    job: { description: "Jasa Balancing per roda", cost: 22200 },
    parts: [{ partId: "common-balancing-weight", quantity: 1 }],
  },
  {
    id: "add-balancing-r17-offroad",
    name: "Balancing Roda (R17 & Offroad)",
    applicableModels: ["pajero-sport", "triton", "xpander", "xforce", "outlander-sport"],
    job: { description: "Jasa Balancing per roda", cost: 27750 },
    parts: [{ partId: "common-balancing-weight", quantity: 1 }],
  },
  {
    id: "add-nitrogen",
    name: "Kuras Nitrogen",
    applicableModels: ["xpander", "pajero-sport", "triton", "xforce", "outlander-sport", "mirage", "l300"],
    job: { description: "Jasa Kuras Nitrogen per roda", cost: 10545 },
    parts: [],
  },
];

const smallCars = ["mirage", "xpander", "xforce"];
const largeCars = ["triton", "outlander-sport", "pajero-sport", "pajero", "delica"]; // Assuming Delica might be added later

export const acAndEngineServices: AdditionalService[] = [
  {
    id: "ac-fresh-ringan-sb",
    name: "AC FRESH RINGAN (SINGLE BLOWER)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Fresh Ringan Single Blower", cost: 0 }, // Cost is set dynamically
    parts: [],
  },
  {
    id: "ac-fresh-ringan-db",
    name: "AC FRESH RINGAN (DOUBLE BLOWER)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Fresh Ringan Double Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-clean",
    name: "AC CLEAN",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Clean", cost: 0 },
    parts: [],
  },
  {
    id: "ac-care",
    name: "AC CARE",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Care", cost: 0 },
    parts: [],
  },
  {
    id: "ac-fresh-sb",
    name: "AC FRESH (SINGLE BLOWER)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Fresh Single Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-fresh-db",
    name: "AC FRESH (DOUBLE BLOWER)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Fresh Double Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-fogging",
    name: "AIR SANITIZER/FOGGING",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa Air Sanitizer/Fogging", cost: 102000 },
    parts: [],
  },
  {
    id: "ac-oli-kompresor-single",
    name: "OLI KOMPRESOR - SINGLE (JASA FREON & OLI)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa & Oli Kompresor Single Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-oli-kompresor-double",
    name: "OLI KOMPRESOR - DOUBLE (JASA FREON & OLI)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa & Oli Kompresor Double Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-flat-rate",
    name: "FLATRATE SERVICE /JAM",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa Flatrate per Jam", cost: 302000 },
    parts: [],
  },
  {
    id: "ac-engine-clean",
    name: "ENGINE CLEAN",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa Engine Clean", cost: 0 },
    parts: [],
  },
];

export function getAcServicePrice(serviceId: string, vehicleModelId: string): number {
  const isSmallCar = smallCars.includes(vehicleModelId);
  
  switch (serviceId) {
    case "ac-fresh-ringan-sb": return isSmallCar ? 555000 : 605000;
    case "ac-fresh-ringan-db": return isSmallCar ? 605000 : 660000;
    case "ac-clean": return isSmallCar ? 271395 : 309690;
    case "ac-care": return isSmallCar ? 170304 : 252000;
    case "ac-fresh-sb": return isSmallCar ? 1011000 : 1212000;
    case "ac-fresh-db": return isSmallCar ? 1415000 : 1718000;
    case "ac-oli-kompresor-single": return isSmallCar ? 302000 : 353000;
    case "ac-oli-kompresor-double": return isSmallCar ? 353000 : 403000;
    case "ac-engine-clean": return isSmallCar ? 222000 : 252000;
    // Default cases for fixed prices
    case "ac-fogging": return 102000;
    case "ac-flat-rate": return 302000;
    default: return 0;
  }
}
