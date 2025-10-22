import type { Accessory } from "@/lib/types";

export const accessories: Accessory[] = [
  // Xpander Accessories
  {
    id: "acc-xp-air-purifier",
    name: "Air Purifier",
    price: 650000,
    applicableModels: ["xpander", "xpander-cross", "pajero-sport", "xforce"],
    job: { description: "Jasa Pemasangan Air Purifier", cost: 50000 },
  },
  {
    id: "acc-xp-side-visor",
    name: "Side Visor (Talang Air)",
    price: 450000,
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Pemasangan Side Visor", cost: 75000 },
  },
  {
    id: "acc-xp-muffler-cutter",
    name: "Muffler Cutter",
    price: 250000,
    applicableModels: ["xpander", "xpander-cross"],
    job: { description: "Jasa Pemasangan Muffler Cutter", cost: 50000 },
  },

  // Pajero Sport Accessories
  {
    id: "acc-ps-front-under-garnish",
    name: "Front Under Garnish",
    price: 1500000,
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Pemasangan Front Under Garnish", cost: 200000 },
  },
  {
    id: "acc-ps-rear-under-garnish",
    name: "Rear Under Garnish",
    price: 1350000,
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Pemasangan Rear Under Garnish", cost: 200000 },
  },
  {
    id: "acc-ps-side-window-deflector",
    name: "Side Window Deflector",
    price: 750000,
    applicableModels: ["pajero-sport"],
    job: { description: "Jasa Pemasangan Side Window Deflector", cost: 100000 },
  },
];
