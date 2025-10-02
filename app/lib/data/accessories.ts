import type { Accessory } from "@/lib/types";

export const accessories: Accessory[] = [
  // Xpander Accessories
  {
    id: "acc-xp-body-kit",
    name: "Body Kit (Front, Side, Rear Skirt) - Xpander",
    price: 6500000,
    applicableModels: ["xpander"],
    job: { description: "Jasa Pasang Body Kit", cost: 500000 },
  },
  {
    id: "acc-xp-spoiler",
    name: "Tailgate Spoiler - Xpander",
    price: 1200000,
    applicableModels: ["xpander"],
    job: { description: "Jasa Pasang Spoiler", cost: 150000 },
  },
  {
    id: "acc-xp-side-visor",
    name: "Side Visor / Talang Air - Xpander",
    price: 450000,
    applicableModels: ["xpander"],
    job: { description: "Jasa Pasang Talang Air", cost: 75000 },
  },

  // Pajero Sport Accessories
  {
    id: "acc-ps-front-under-garnish",
    name: "Front Under Garnish - Pajero Sport",
    price: 2500000,
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Pasang Front Garnish", cost: 200000 },
  },
  {
    id: "acc-ps-rear-under-garnish",
    name: "Rear Under Garnish - Pajero Sport",
    price: 2300000,
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Pasang Rear Garnish", cost: 200000 },
  },
  {
    id: "acc-ps-hood-emblem",
    name: "Hood Emblem 'PAJERO SPORT'",
    price: 750000,
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Pasang Hood Emblem", cost: 100000 },
  },

  // Xforce Accessories
  {
    id: "acc-xf-side-body-moulding",
    name: "Side Body Moulding - Xforce",
    price: 950000,
    applicableModels: ["xforce"],
    job: { description: "Jasa Pasang Side Moulding", cost: 120000 },
  },

  // Common Accessories
  {
    id: "acc-common-dash-cam",
    name: "Dashboard Camera (Dash Cam)",
    price: 1800000,
    applicableModels: ["xpander", "pajero-sport", "xforce", "outlander-sport", "triton", "mirage", "l300"],
    job: { description: "Jasa Instalasi Dash Cam", cost: 250000 },
  },
];
