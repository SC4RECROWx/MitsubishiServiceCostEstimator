
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
        { description: "Jasa Ganti Filter Oli", cost: 98500 },
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
        { description: "Jasa Ganti Filter Oli", cost: 98500 },
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
    name: "Pahe 4: Ganti Oli + Filter Oli + AC & Engine Flush",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Filter Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "xp-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
    ],
  },
    // Pahe Services for Xpander Cross
  {
    id: "xpc-pahe-1",
    vehicleModelId: "xpander-cross",
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
    id: "xpc-pahe-2",
    vehicleModelId: "xpander-cross",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Filter Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "xpc-pahe-3",
    vehicleModelId: "xpander-cross",
    name: "Pahe 3: Ganti Oli + Filter Oli & AC",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Filter Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "xp-ac-filter", quantity: 1 },
    ],
  },
  {
    id: "xpc-pahe-4",
    vehicleModelId: "xpander-cross",
    name: "Pahe 4: Ganti Oli + Filter Oli + AC & Engine Flush",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 98500 },
        { description: "Jasa Ganti Filter Oli", cost: 98500 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "xp-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
    ],
  },
  // Pahe Services for Pajero Sport (Dakar)
  {
    id: "ps-dakar-pahe-1",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli", cost: 145000 }],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 7 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-dakar-pahe-2",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 145000 },
      { description: "Jasa Ganti Oli Filter", cost: 145000 },
    ],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 8 },
      { partId: "ps-dakar-oil-filter", quantity: 1 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-dakar-pahe-3",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 3: Ganti Oli, Filter Oli + Filter AC",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 145000 },
      { description: "Jasa Ganti Oli Filter", cost: 145000 },
    ],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 8 },
      { partId: "ps-dakar-oil-filter", quantity: 1 },
      { partId: "ps-dakar-ac-filter", quantity: 1 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-dakar-pahe-4",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 4: Ganti Oli, Filter Oli, Filter AC + Engine Flush",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 145000 },
      { description: "Jasa Ganti Oli Filter", cost: 145000 },
    ],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 8 },
      { partId: "ps-dakar-oil-filter", quantity: 1 },
      { partId: "ps-dakar-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  // Pahe Services for Pajero Sport (Exceed/GLX)
  {
    id: "ps-exceed-pahe-1",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli", cost: 145000 }],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 6 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-exceed-pahe-2",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 145000 },
      { description: "Jasa Ganti Filter Oli", cost: 145000 },
    ],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 7 },
      { partId: "ps-exceed-oil-filter", quantity: 1 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-exceed-pahe-3",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 3: Ganti Oli, Filter Oli & Filter AC",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 145000 },
      { description: "Jasa Ganti Filter Oli", cost: 145000 },
    ],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 7 },
      { partId: "ps-exceed-oil-filter", quantity: 1 },
      { partId: "ps-exceed-ac-filter", quantity: 1 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "ps-exceed-pahe-4",
    vehicleModelId: "pajero-sport-anps",
    name: "Pahe 4: Ganti Oli, Filter Oli, Filter AC & Engine Flush",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 145000 },
      { description: "Jasa Ganti Filter Oli", cost: 145000 },
    ],
    parts: [
      { partId: "ps-exceed-engine-oil-1l", quantity: 7 },
      { partId: "ps-exceed-oil-filter", quantity: 1 },
      { partId: "ps-exceed-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
      { partId: "ps-dakar-drain-plug-gasket", quantity: 1 },
    ],
  },
  // Pahe Services for Xforce
  {
    id: "xf-pahe-2",
    vehicleModelId: "xforce",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli", cost: 97000 },
        { description: "Jasa Ganti Filter Oli", cost: 0 },
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
    id: "os-pahe-1",
    vehicleModelId: "outlander-sport",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [{ description: "Jasa Ganti Oli", cost: 104000 }],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 4 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "os-pahe-2",
    vehicleModelId: "outlander-sport",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 104000 },
      { description: "Jasa Ganti Filter Oli", cost: 104000 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 5 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "os-pahe-3",
    vehicleModelId: "outlander-sport",
    name: "Pahe 3: Ganti Oli + Filter Oli & Filter AC",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 104000 },
      { description: "Jasa Ganti Filter Oli", cost: 104000 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 5 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "os-ac-filter", quantity: 1 },
    ],
  },
  {
    id: "os-pahe-4",
    vehicleModelId: "outlander-sport",
    name: "Pahe 4: Ganti Oli + Filter Oli + Filter Oli & Engine FLush",
    mileage: 0,
    jobs: [
      { description: "Jasa Ganti Oli", cost: 104000 },
      { description: "Jasa Ganti Filter Oli", cost: 104000 },
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 5 },
      { partId: "xp-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
      { partId: "os-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
    ],
  },
  // Pahe Services for Mirage
  {
    id: "mr-pahe-1",
    vehicleModelId: "mirage",
    name: "Pahe 1: Ganti Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli Mesin", cost: 98500 }
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 3 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "mr-pahe-2",
    vehicleModelId: "mirage",
    name: "Pahe 2: Ganti Oli + Filter Oli",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli Mesin", cost: 98500 },
        { description: "Jasa Ganti Filter Oli Mesin", cost: 98500 }
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 3 },
      { partId: "mr-oil-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "mr-pahe-3",
    vehicleModelId: "mirage",
    name: "Pahe 3: Ganti Oli, Filter Oli + Filter AC",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli Mesin", cost: 98500 },
        { description: "Jasa Ganti Filter Oli Mesin", cost: 98500 }
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 3 },
      { partId: "mr-oil-filter", quantity: 1 },
      { partId: "mr-ac-filter", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
    ],
  },
  {
    id: "mr-pahe-4",
    vehicleModelId: "mirage",
    name: "Pahe 4: Ganti Oli, Filter Oli, Filter AC + Engine Flush",
    mileage: 0,
    jobs: [
        { description: "Jasa Ganti Oli Mesin", cost: 98500 },
        { description: "Jasa Ganti Filter Oli Mesin", cost: 98500 }
    ],
    parts: [
      { partId: "xp-engine-oil-1l", quantity: 3 },
      { partId: "mr-oil-filter", quantity: 1 },
      { partId: "mr-ac-filter", quantity: 1 },
      { partId: "xp-engine-flush", quantity: 1 },
      { partId: "xp-drain-plug-gasket", quantity: 1 },
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
    id: "add-brake-pad-front-ps-exceed",
    name: "Ganti Kampas Rem Depan",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Kampas Rem Depan", cost: 435000 },
    parts: [
        { partId: "ps-exceed-brake-pad-front", quantity: 1 },
        { partId: "common-brake-cleaner", quantity: 1 },
    ],
  },
  {
    id: "add-brake-pad-rear-ps-exceed",
    name: "Ganti Kampas Rem Belakang",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Kampas Rem Belakang", cost: 435000 },
    parts: [
        { partId: "ps-exceed-brake-pad-rear", quantity: 1 },
        { partId: "common-brake-cleaner", quantity: 1 },
    ],
  },
  {
    id: "add-brake-pad-front-ps-dakar",
    name: "Ganti Kampas Rem Depan",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Kampas Rem Depan", cost: 435000 },
    parts: [
      { partId: "ps-dakar-brake-pad-front", quantity: 1 },
      { partId: "common-brake-cleaner", quantity: 1 },
    ],
  },
  {
    id: "add-brake-pad-rear-ps-dakar",
    name: "Ganti Kampas Rem Belakang",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Kampas Rem Belakang", cost: 435000 },
    parts: [
      { partId: "ps-dakar-brake-pad-rear", quantity: 1 },
      { partId: "common-brake-cleaner", quantity: 1 },
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
    id: "add-battery-ps",
    name: "Ganti Aki",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Aki", cost: 197000 },
    parts: [{ partId: "ps-battery", quantity: 1 }],
  },
  {
    id: "add-fuel-filter-ps",
    name: "Ganti Fuel Filter",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Fuel Filter", cost: 145000 },
    parts: [
      { partId: "ps-mut", quantity: 1 },
      { partId: "ps-fuel-filter", quantity: 1 },
      { partId: "ps-purging", quantity: 1 },
    ],
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
  // Pajero Sport Transmission Oil Services
  {
    id: "add-transm-oil-ps-mt",
    name: "Ganti Oli Transmisi MT",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Oli Transmisi MT", cost: 435000 },
    parts: [{ partId: "ps-mtf-oil-1l", quantity: 4 }],
  },
  {
    id: "add-transm-oil-ps-at-exceed",
    name: "Ganti Oli Transmisi AT",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Oli Transmisi Matic", cost: 870000 },
    parts: [{ partId: "ps-atf-pa-1l", quantity: 10 }],
  },
  {
    id: "add-transm-oil-ps-at-dakar",
    name: "Ganti Oli Transmisi AT",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Oli Transmisi Matic", cost: 870000 },
    parts: [{ partId: "xp-transm-oil-atf-ma1-1l", quantity: 12 }],
  },
  {
    id: "add-transfer-oil-ps-4x4",
    name: "Ganti Oli 4x4 Transfer",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Oli 4x4 Transfer", cost: 290000 },
    parts: [{ partId: "ps-transfer-oil-1l", quantity: 3 }],
  },
  // Xpander Other Services
  {
    id: "add-air-filter-xp",
    name: "Ganti Saringan Udara",
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Penggantian Saringan Udara", cost: 0 },
    parts: [{ partId: "xp-air-filter", quantity: 1 }],
  },
  // Pajero Sport Other Services
  {
    id: "add-air-filter-ps-dakar",
    name: "Ganti Saringan Udara",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Saringan Udara", cost: 0 },
    parts: [{ partId: "ps-dakar-air-filter", quantity: 1 }],
  },
  {
    id: "add-air-filter-ps-exceed",
    name: "Ganti Saringan Udara",
    applicableModels: ["pajero-sport-anps"],
    job: { description: "Jasa Ganti Saringan Udara", cost: 0 },
    parts: [{ partId: "ps-exceed-air-filter", quantity: 1 }],
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
    parts: [{ partId: "xp-spark-plug", quantity: 4 }], // Assuming 4 spark plugs
  },
  // Outlander Sport Brake Services
  {
    id: "add-brake-pad-front-os",
    name: "Ganti Kampas Rem Depan",
    applicableModels: ["outlander-sport"],
    job: { description: "Jasa Pengerjaan Kampas Rem Depan", cost: 312000 },
    parts: [
      { partId: "os-brake-pad-front", quantity: 1 },
      { partId: "common-brake-cleaner", quantity: 1 },
    ],
  },
  {
    id: "add-brake-pad-rear-os",
    name: "Ganti Kampas Rem Belakang",
    applicableModels: ["outlander-sport"],
    job: { description: "Jasa Pengerjaan Kampas Rem Belakang", cost: 416000 },
    parts: [
      { partId: "os-brake-pad-rear", quantity: 1 },
      { partId: "common-brake-cleaner", quantity: 1 },
    ],
  },
  // Outlander Sport Transmission Services
  {
    id: "add-transm-oil-os-cvt",
    name: "Ganti Oli Transmisi Matic CVT",
    applicableModels: ["outlander-sport"],
    job: { description: "Jasa Ganti Oli Matic CVT", cost: 416000 },
    parts: [{ partId: "os-oil-cvt-j4", quantity: 5 }],
  },
  {
    id: "add-transm-oil-os-mt",
    name: "Ganti Oli Transmisi Manual",
    applicableModels: ["outlander-sport"],
    job: { description: "Jasa Ganti Oli Manual", cost: 312000 },
    parts: [{ partId: "os-oil-mt-75w80", quantity: 4 }],
  },
  {
    id: "add-alternator-belt-os",
    name: "Ganti Belt Alternator",
    applicableModels: ["outlander-sport"],
    job: { description: "Jasa Ganti Belt Alternator", cost: 290000 },
    parts: [{ partId: "os-alternator-belt", quantity: 1 }],
  },
  // Mirage Services
  {
    id: "add-brake-pad-front-mr",
    name: "Ganti Kampas Rem Depan",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Kampas Rem Depan", cost: 295500 },
    parts: [
        { partId: "mr-brake-pad-front", quantity: 1 },
        { partId: "common-brake-cleaner", quantity: 1 }
    ],
  },
  {
    id: "add-brake-pad-rear-mr",
    name: "Ganti Kampas Rem Belakang",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Kampas Rem Belakang", cost: 394000 },
    parts: [
        { partId: "mr-brake-shoe-rear", quantity: 1 },
        { partId: "common-brake-cleaner", quantity: 1 }
    ],
  },
  {
    id: "add-battery-mr",
    name: "Ganti Aki",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Aki", cost: 197000 },
    parts: [{ partId: "xp-battery", quantity: 1 }],
  },
  {
    id: "add-tune-up-mr",
    name: "Engine Tune Up",
    applicableModels: ["mirage"],
    job: { description: "Jasa Tune Up", cost: 689500 },
    parts: [],
  },
  {
    id: "add-spark-plug-mr",
    name: "Ganti Busi (opsional)",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Busi", cost: 0 },
    parts: [{ partId: "mr-spark-plug", quantity: 3 }],
  },
  {
    id: "add-alternator-belt-mr",
    name: "Ganti Belt Alternator (opsional)",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Belt Alternator", cost: 197000 },
    parts: [{ partId: "mr-alternator-belt", quantity: 1 }],
  },
  {
    id: "add-transm-oil-mr-cvt",
    name: "Ganti Oli Transmisi Matic CVT",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Oli Transmisi Matic", cost: 394000 },
    parts: [{ partId: "os-oil-cvt-j4", quantity: 3 }],
  },
  {
    id: "add-transm-oil-mr-mt",
    name: "Ganti Oli Transmisi Manual",
    applicableModels: ["mirage"],
    job: { description: "Jasa Ganti Oli Transmisi Manual", cost: 295500 },
    parts: [{ partId: "os-oil-mt-75w80", quantity: 4 }],
  },
];

const allModels = ["xpander", "xpander-cross", "pajero-sport-anps", "xforce", "outlander-sport", "mirage"];

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
    name: "Balancing Roda (R13-R16)",
    applicableModels: allModels,
    job: { description: "Jasa Balancing per roda", cost: 22200 },
    parts: [],
  },
  {
    id: "add-balancing-r17-offroad",
    name: "Balancing Roda (R17 & Offroad)",
    applicableModels: allModels,
    job: { description: "Jasa Balancing per roda", cost: 27750 },
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

const smallCars = ["mirage", "xpander", "xpander-cross", "xforce"];
const largeCars = ["outlander-sport", "pajero-sport-anps"];

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
  const isSmallCar = ["xpander", "mirage", "xpander-cross", "xforce"].includes(vehicleModelId);
  const isLargeCar = ["outlander-sport", "pajero-sport-anps"].includes(vehicleModelId);

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

  // Default cases for fixed prices regardless of car size
  switch (serviceId) {
    case "ac-fogging": return 102000;
    case "ac-flat-rate": return 303860;
    default: return 0;
  }
}
