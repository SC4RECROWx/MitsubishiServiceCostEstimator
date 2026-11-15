import type { PeriodicService, AdditionalService } from "@/lib/types";

const smallCarModels = ["xpander", "xpander-cross", "xforce", "destinator"];

const generateSmallCarPM = (): PeriodicService[] => {
  const services: PeriodicService[] = [];
  
  smallCarModels.forEach(modelId => {
    const oilQty = modelId === 'destinator' ? 5 : 4;

    // PM 60K
    services.push({
      id: `sm-pm-60k-${modelId}`,
      vehicleModelId: modelId,
      name: "Servis Berkala 60.000 KM",
      mileage: 60000,
      jobs: [{ description: "Jasa Servis Berkala 60K", cost: 0 }],
      parts: [
        { partId: "sm-engine-oil-1l", quantity: oilQty },
        { partId: "sm-oil-filter", quantity: 1 },
        { partId: "sm-gasket", quantity: 1 },
        { partId: "sm-engine-flush", quantity: 1 },
        { partId: "sm-brake-cleaner", quantity: 1 },
        { partId: "sm-ac-filter", quantity: 1 },
      ],
    });

    // PM 70K
    services.push({
      id: `sm-pm-70k-${modelId}`,
      vehicleModelId: modelId,
      name: "Servis Berkala 70.000 KM",
      mileage: 70000,
      jobs: [{ description: "Jasa Servis Berkala 70K", cost: 0 }],
      parts: [
        { partId: "sm-engine-oil-1l", quantity: oilQty },
        { partId: "sm-oil-filter", quantity: 1 },
        { partId: "sm-gasket", quantity: 1 },
        { partId: "sm-ac-filter", quantity: 1 },
      ],
    });

    // PM 80K
    services.push({
      id: `sm-pm-80k-${modelId}`,
      vehicleModelId: modelId,
      name: "Servis Berkala 80.000 KM",
      mileage: 80000,
      jobs: [{ description: "Jasa Servis Berkala 80K", cost: 0 }],
      parts: [
        { partId: "sm-engine-oil-1l", quantity: oilQty },
        { partId: "sm-oil-filter", quantity: 1 },
        { partId: "sm-gasket", quantity: 1 },
        { partId: "sm-engine-flush", quantity: 1 },
        { partId: "sm-brake-cleaner", quantity: 1 },
        { partId: "sm-ac-filter", quantity: 1 },
        { partId: "sm-air-filter", quantity: 1 },
      ],
    });

    // PM 90K
    services.push({
      id: `sm-pm-90k-${modelId}`,
      vehicleModelId: modelId,
      name: "Servis Berkala 90.000 KM",
      mileage: 90000,
      jobs: [{ description: "Jasa Servis Berkala 90K", cost: 0 }],
      parts: [
        { partId: "sm-engine-oil-1l", quantity: oilQty },
        { partId: "sm-oil-filter", quantity: 1 },
        { partId: "sm-gasket", quantity: 1 },
        { partId: "sm-ac-filter", quantity: 1 },
      ],
    });

    // PM 100K
    services.push({
      id: `sm-pm-100k-${modelId}`,
      vehicleModelId: modelId,
      name: "Servis Berkala 100.000 KM",
      mileage: 100000,
      jobs: [{ description: "Jasa Servis Berkala 100K", cost: 0 }],
      parts: [
        { partId: "sm-engine-oil-1l", quantity: oilQty },
        { partId: "sm-oil-filter", quantity: 1 },
        { partId: "sm-gasket", quantity: 1 },
        { partId: "sm-engine-flush", quantity: 1 },
        { partId: "sm-brake-cleaner", quantity: 1 },
        { partId: "sm-ac-filter", quantity: 1 },
        { partId: "sm-spark-plug", quantity: 1 },
      ],
    });
  });

  return services;
};

export const periodicServices: PeriodicService[] = [
  ...generateSmallCarPM(),
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

const allModels = ["xpander", "xpander-cross", "pajero-sport-anps", "xforce", "destinator"];
const smallCars = ["xpander", "xpander-cross", "xforce"];
const largeCars = ["pajero-sport-anps", "destinator"];

export const tyreServices: AdditionalService[] = [
  {
    id: "tyre-spooring",
    name: "Spooring",
    applicableModels: allModels,
    job: { description: "Jasa Spooring", cost: 0 },
    parts: [],
  },
  {
    id: "tyre-balancing",
    name: "Balancing",
    applicableModels: allModels,
    job: { description: "Jasa Balancing", cost: 0 },
    parts: [],
  },
  {
    id: "tyre-pkg-spooring-balancing",
    name: "Paket Spooring & Balancing",
    applicableModels: allModels,
    job: { description: "Jasa Paket Spooring & Balancing", cost: 0 },
    parts: [],
  },
  {
    id: "tyre-baut-chamber",
    name: "Baut Chamber",
    applicableModels: allModels,
    job: { description: "Jasa Baut Chamber", cost: 0 },
    parts: [],
  },
  {
    id: "tyre-tambal-tubles",
    name: "Tambal Tubles",
    applicableModels: allModels,
    job: { description: "Jasa Tambal Tubles", cost: 0 },
    parts: [],
  },
  {
    id: "tyre-tambah-nitrogen",
    name: "Tambah Nitrogen",
    applicableModels: allModels,
    job: { description: "Jasa Tambah Nitrogen", cost: 0 },
    parts: [],
  },
  {
    id: "tyre-kuras-nitrogen",
    name: "Kuras Nitrogen",
    applicableModels: allModels,
    job: { description: "Jasa Kuras Nitrogen", cost: 0 },
    parts: [],
  },
];

export const acServices: AdditionalService[] = [
  {
    id: "ac-care",
    name: "AC Care",
    applicableModels: allModels,
    job: { description: "Jasa AC Care", cost: 0 },
    parts: [],
  },
  {
    id: "ac-clean",
    name: "AC Clean",
    applicableModels: allModels,
    job: { description: "Jasa AC Clean", cost: 0 },
    parts: [],
  },
  {
    id: "ac-fresh-sb",
    name: "AC Fresh Single Blower",
    applicableModels: allModels,
    job: { description: "Jasa AC Fresh Single Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-fresh-db",
    name: "AC Fresh Double Blower",
    applicableModels: allModels,
    job: { description: "Jasa AC Fresh Double Blower", cost: 0 },
    parts: [],
  },
  {
    id: "ac-condensor-cleaner",
    name: "Condensor Cleaner",
    applicableModels: allModels,
    job: { description: "Jasa Condensor Cleaner", cost: 0 },
    parts: [],
  },
  {
    id: "ac-air-sanitizer",
    name: "Air Sanitizer",
    applicableModels: allModels,
    job: { description: "Jasa Air Sanitizer", cost: 0 },
    parts: [],
  },
  {
    id: "ac-freon-s-oli",
    name: "Freon-S & oli kompresor",
    applicableModels: allModels,
    job: { description: "Jasa Freon-S & Oli Kompresor", cost: 0 },
    parts: [],
  },
  {
    id: "ac-freon-d-oli",
    name: "Freon-D & oli kompresor",
    applicableModels: allModels,
    job: { description: "Jasa Freon-D & Oli Kompresor", cost: 0 },
    parts: [],
  },
];

export const engineMaintenanceServices: AdditionalService[] = [
  {
    id: "eng-flushing-line",
    name: "Flushing Line Injector",
    applicableModels: allModels,
    job: { description: "Jasa Flushing Line Injector", cost: 0 },
    parts: [],
  },
  {
    id: "eng-combustion",
    name: "Combustion Cleaner",
    applicableModels: ["xpander", "xpander-cross", "xforce", "destinator"],
    job: { description: "Jasa Combustion Cleaner", cost: 0 },
    parts: [],
  },
  {
    id: "eng-catalytic",
    name: "Catalytic Converter Cleaner",
    applicableModels: allModels,
    job: { description: "Jasa Catalytic Converter Cleaner", cost: 0 },
    parts: [],
  },
  {
    id: "eng-hydrocarbon",
    name: "HydroCarbon Cleaner",
    applicableModels: allModels,
    job: { description: "Jasa HydroCarbon Cleaner", cost: 0 },
    parts: [],
  },
  {
    id: "eng-turbo",
    name: "Turbo Cleaner",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Turbo Cleaner", cost: 0 },
    parts: [],
  },
];

export function getEngineServicePrice(serviceId: string, vehicleModelId: string): number {
  const isSmallGroup = ["xpander", "xpander-cross", "xforce", "destinator"].includes(vehicleModelId);
  const isPajero = vehicleModelId === "pajero-sport-anps";

  if (isSmallGroup) {
    switch (serviceId) {
      case "eng-flushing-line": return 293040;
      case "eng-combustion": return 186480;
      case "eng-catalytic": return 179820;
      case "eng-hydrocarbon": return 299700;
    }
  }

  if (isPajero) {
    switch (serviceId) {
      case "eng-flushing-line": return 266400;
      case "eng-turbo": return 237096;
      case "eng-hydrocarbon": return 299700;
      case "eng-catalytic": return 179820;
    }
  }

  return 0;
}

export function getAcServicePrice(serviceId: string, vehicleModelId: string): number {
  const isSmallCar = smallCars.includes(vehicleModelId);
  const isLargeCar = largeCars.includes(vehicleModelId);

  if (isSmallCar) {
    switch (serviceId) {
      case "ac-care": return 181130;
      case "ac-clean": return 288510;
      case "ac-fresh-sb": return 826000;
      case "ac-fresh-db": return 1156400;
      case "ac-condensor-cleaner": return 236000;
      case "ac-air-sanitizer": return 82600;
      case "ac-freon-s-oli": return 246620;
      case "ac-freon-d-oli": return 288510;
    }
  }

  if (isLargeCar) {
    switch (serviceId) {
      case "ac-care": return 205910;
      case "ac-clean": return 329220;
      case "ac-fresh-sb": return 990020;
      case "ac-fresh-db": return 1404200;
      case "ac-condensor-cleaner": return 259600;
      case "ac-air-sanitizer": return 82600;
      case "ac-freon-s-oli": return 288510;
      case "ac-freon-d-oli": return 329220;
    }
  }

  return 0;
}

export function getTyreServicePrice(serviceId: string, vehicleModelId: string): number {
  const isSmallCar = smallCars.includes(vehicleModelId);
  const isLargeCar = largeCars.includes(vehicleModelId);

  if (isSmallCar) {
    switch (serviceId) {
      case "tyre-spooring": return 180000;
      case "tyre-balancing": return 160000;
      case "tyre-pkg-spooring-balancing": return 315315;
      case "tyre-baut-chamber": return 135135;
      case "tyre-tambal-tubles": return 27027;
      case "tyre-tambah-nitrogen": return 12444;
      case "tyre-kuras-nitrogen": return 20270;
    }
  }

  if (isLargeCar) {
    switch (serviceId) {
      case "tyre-spooring": return 198198;
      case "tyre-balancing": return 198198;
      case "tyre-pkg-spooring-balancing": return 360360;
      case "tyre-baut-chamber": return 180180;
      case "tyre-tambal-tubles": return 31532;
      case "tyre-tambah-nitrogen": return 12444;
      case "tyre-kuras-nitrogen": return 20270;
    }
  }

  return 0;
}