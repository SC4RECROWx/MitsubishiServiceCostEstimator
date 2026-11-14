import type { PeriodicService, AdditionalService } from "@/lib/types";

export const periodicServices: PeriodicService[] = [
  // Pajero Sport PM 60K
  {
    id: "ps-pm-60k",
    vehicleModelId: "pajero-sport-anps",
    name: "Servis Berkala 60.000 KM",
    mileage: 60000,
    jobs: [{ description: "Jasa Servis Berkala 60K", cost: 2001000 }],
    parts: [
      { partId: "ps-engine-oil-1l", quantity: 8 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-gasket", quantity: 1 },
      { partId: "ps-engine-flush", quantity: 1 },
      { partId: "ps-fuel-filter-pm", quantity: 1 },
      { partId: "ps-brake-cleaner", quantity: 1 },
      { partId: "ps-ac-filter-pm", quantity: 1 },
    ],
  },
  // Pajero Sport PM 70K
  {
    id: "ps-pm-70k",
    vehicleModelId: "pajero-sport-anps",
    name: "Servis Berkala 70.000 KM",
    mileage: 70000,
    jobs: [{ description: "Jasa Servis Berkala 70K", cost: 812000 }],
    parts: [
      { partId: "ps-engine-oil-1l", quantity: 8 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-gasket", quantity: 1 },
      { partId: "ps-ac-filter-pm", quantity: 1 },
    ],
  },
  // Pajero Sport PM 80K (4x2)
  {
    id: "ps-pm-80k-4x2",
    vehicleModelId: "pajero-sport-anps",
    name: "Servis Berkala 80.000 KM (4x2)",
    mileage: 80000,
    jobs: [{ description: "Jasa Servis Berkala 80K", cost: 2030000 }],
    parts: [
      { partId: "ps-engine-oil-1l", quantity: 8 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-gasket", quantity: 1 },
      { partId: "ps-engine-flush", quantity: 1 },
      { partId: "ps-fuel-filter-pm", quantity: 1 },
      { partId: "ps-air-filter-pm", quantity: 1 },
      { partId: "ps-brake-cleaner", quantity: 1 },
      { partId: "ps-ac-filter-pm", quantity: 1 },
      { partId: "ps-gear-oil-1l", quantity: 3 },
    ],
  },
  // Pajero Sport PM 80K (4x4)
  {
    id: "ps-pm-80k-4x4",
    vehicleModelId: "pajero-sport-anps",
    name: "Servis Berkala 80.000 KM (4x4)",
    mileage: 80000,
    jobs: [{ description: "Jasa Servis Berkala 80K", cost: 2030000 }],
    parts: [
      { partId: "ps-engine-oil-1l", quantity: 8 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-gasket", quantity: 1 },
      { partId: "ps-engine-flush", quantity: 1 },
      { partId: "ps-fuel-filter-pm", quantity: 1 },
      { partId: "ps-air-filter-pm", quantity: 1 },
      { partId: "ps-brake-cleaner", quantity: 1 },
      { partId: "ps-ac-filter-pm", quantity: 1 },
      { partId: "ps-gear-oil-1l", quantity: 5 },
    ],
  },
  // Pajero Sport PM 90K
  {
    id: "ps-pm-90k",
    vehicleModelId: "pajero-sport-anps",
    name: "Servis Berkala 90.000 KM",
    mileage: 90000,
    jobs: [{ description: "Jasa Servis Berkala 90K", cost: 812000 }],
    parts: [
      { partId: "ps-engine-oil-1l", quantity: 8 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-gasket", quantity: 1 },
      { partId: "ps-ac-filter-pm", quantity: 1 },
    ],
  },
  // Pajero Sport PM 100K
  {
    id: "ps-pm-100k",
    vehicleModelId: "pajero-sport-anps",
    name: "Servis Berkala 100.000 KM",
    mileage: 100000,
    jobs: [{ description: "Jasa Servis Berkala 100K", cost: 2581000 }],
    parts: [
      { partId: "ps-engine-oil-1l", quantity: 8 },
      { partId: "ps-oil-filter", quantity: 1 },
      { partId: "ps-gasket", quantity: 1 },
      { partId: "ps-fuel-filter-pm", quantity: 1 },
      { partId: "ps-brake-cleaner", quantity: 1 },
      { partId: "ps-ac-filter-pm", quantity: 1 },
      { partId: "ps-ps-fluid-1l", quantity: 2 },
    ],
  },
];


export const additionalServices: AdditionalService[] = [
  {
    id: "add-brake-pad-front-xp",
    name: "Ganti Kampas Rem Depan",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Kampas Rem Depan", cost: 295500 },
    parts: [
        { partId: "xp-brake-pad-front", quantity: 1 },
        { partId: "common-brake-cleaner", quantity: 1 }
    ],
  },
  {
    id: "add-brake-pad-rear-xp",
    name: "Ganti Kampas Rem Belakang",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Kampas Rem Belakang", cost: 394000 },
    parts: [
        { partId: "xp-brake-shoe-rear", quantity: 1 },
        { partId: "common-brake-cleaner", quantity: 1 }
    ],
  },
  {
    id: "add-battery-xp",
    name: "Ganti Aki",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Aki", cost: 328333 },
    parts: [{ partId: "xp-battery", quantity: 1 }],
  },
  {
    id: "add-battery-xp-asg",
    name: "Ganti Aki ASG (Idle Start-Stop)",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Aki", cost: 328333 },
    parts: [{ partId: "xp-battery-asg", quantity: 1 }],
  },
  // Xpander Transmission Oil Services
  {
    id: "add-transm-oil-xp-mt",
    name: "Ganti Oli Transmisi MT",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Oli Transmisi Manual", cost: 295500 },
    parts: [{ partId: "xp-transm-oil-mt-1l", quantity: 3 }],
  },
  {
    id: "add-transm-oil-xp-at",
    name: "Ganti Oli Transmisi AT",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Oli Transmisi Matic", cost: 591000 },
    parts: [{ partId: "xp-transm-oil-atf-ma1-1l", quantity: 4 }],
  },
  {
    id: "add-transm-oil-xp-cvt",
    name: "Ganti Oli Transmisi CVT",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Ganti Oli Transmisi Matic", cost: 591000 },
    parts: [{ partId: "xp-transm-oil-cvt-ma1-4l", quantity: 1 }],
  },
  // Xpander Other Services
  {
    id: "add-air-filter-xp",
    name: "Ganti Saringan Udara",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Penggantian Saringan Udara", cost: 0 },
    parts: [{ partId: "xp-air-filter", quantity: 1 }],
  },
  {
    id: "add-alternator-belt-xp",
    name: "Ganti Belt Alternator",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Penggantian Belt Alternator", cost: 246250 },
    parts: [{ partId: "xp-alternator-belt", quantity: 1 }],
  },
  {
    id: "add-spark-plug-xp",
    name: "Ganti Busi",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Penggantian Busi", cost: 394000 },
    parts: [{ partId: "xp-spark-plug", quantity: 4 }],
  },
];

const allModels = ["xpander", "xpander-cross", "pajero-sport-anps", "xforce"];

export const tyreServices: AdditionalService[] = [
  {
    id: "add-spooring",
    name: "Spooring",
    applicableModels: allModels,
    job: { description: "Jasa Spooring", cost: 133200 },
    parts: [],
  },
  {
    id: "add-balancing-r13-16",
    name: "Balancing 4 Roda (R13-R16)",
    applicableModels: allModels,
    job: { description: "Jasa Balancing 4 Roda", cost: 88800 },
    parts: [],
  },
  {
    id: "add-balancing-r17-offroad",
    name: "Balancing 4 Roda (R17 & Offroad)",
    applicableModels: allModels,
    job: { description: "Jasa Balancing 4 Roda", cost: 111000 },
    parts: [],
  },
  {
    id: "add-nitrogen",
    name: "Kuras Nitrogen",
    applicableModels: allModels,
    job: { description: "Jasa Kuras Nitrogen per roda", cost: 10545 },
    parts: [],
  },
];

const smallCars = ["xpander", "xpander-cross", "xforce"];
const largeCars = ["pajero-sport-anps"];

export const acAndEngineServices: AdditionalService[] = [
  {
    id: "ac-fresh-ringan-sb",
    name: "AC FRESH RINGAN (SINGLE BLOWER)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa AC Fresh Ringan Single Blower", cost: 0 },
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
    name: "OLI KOMPRESOR - SINGLE (JASA,FREON & OLI)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa & Oli Kompresor Single Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-oli-kompresor-double",
    name: "OLI KOMPRESOR - DOUBLE (JASA,FREON & OLI)",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa & Oli Kompresor Double Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-flat-rate",
    name: "FLATRATE SERVICE /JAM",
    applicableModels: [...smallCars, ...largeCars],
    job: { description: "Jasa Flatrate per Jam", cost: 303860 },
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
  const isSmallCar = ["xpander", "xpander-cross", "xforce"].includes(vehicleModelId);
  const isLargeCar = ["pajero-sport-anps"].includes(vehicleModelId);

  if (isSmallCar) {
    switch (serviceId) {
      case "ac-fresh-ringan-sb": return 559016;
      case "ac-fresh-ringan-db": return 609174;
      case "ac-clean": return 355473;
      case "ac-care": return 223170;
      case "ac-fresh-sb": return 1017714;
      case "ac-fresh-db": return 1424800;
      case "ac-oli-kompresor-single": return 302000;
      case "ac-oli-kompresor-double": return 355473;
      case "ac-engine-clean": return 223170;
    }
  }

  if (isLargeCar) {
    switch (serviceId) {
      case "ac-fresh-ringan-sb": return 609174;
      case "ac-fresh-ringan-db": return 660631;
      case "ac-clean": return 405631;
      case "ac-care": return 253701;
      case "ac-fresh-sb": return 1219803;
      case "ac-fresh-db": return 1730114;
      case "ac-oli-kompresor-single": return 355473;
      case "ac-oli-kompresor-double": return 405631;
      case "ac-engine-clean": return 253701;
    }
  }

  switch (serviceId) {
    case "ac-fogging": return 102000;
    case "ac-flat-rate": return 303860;
    default: return 0;
  }
}
