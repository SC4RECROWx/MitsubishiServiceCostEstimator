import type { Part } from "@/lib/types";

export const parts: Part[] = [
  // Xpander Parts
  { id: "xp-oil-filter", name: "Filter Oli - Xpander", partNumber: "1230A182", price: 45000 },
  { id: "xp-engine-oil", name: "Oli Mesin 0W-20 (4L)", partNumber: "MZ320981", price: 420000 },
  { id: "xp-drain-plug-gasket", name: "Gasket Baut Oli", partNumber: "MD050317", price: 8000 },
  { id: "xp-air-filter", name: "Filter Udara - Xpander", partNumber: "1500A608", price: 150000 },
  { id: "xp-ac-filter", name: "Filter AC - Xpander", partNumber: "7850A002", price: 120000 },
  { id: "xp-spark-plug", name: "Busi Iridium (per pcs)", partNumber: "1822A088", price: 180000 },
  { id: "xp-brake-pad-front", name: "Kampas Rem Depan - Xpander", partNumber: "4605B595", price: 550000 },
  { id: "xp-brake-shoe-rear", name: "Kampas Rem Belakang (Sepatu Rem) - Xpander", partNumber: "4800A121", price: 480000 },
  { id: "xp-battery", name: "Aki Mobil (Battery) - Xpander", partNumber: "MF-44B19L", price: 750000 },

  // Pajero Sport Parts
  { id: "ps-oil-filter", name: "Filter Oli - Pajero Sport", partNumber: "1230A186", price: 95000 },
  { id: "ps-engine-oil", name: "Oli Mesin Diesel 5W-30 (8L)", partNumber: "MZ320988", price: 980000 },
  { id: "ps-drain-plug-gasket", name: "Gasket Baut Oli - Pajero Sport", partNumber: "MF660066", price: 12000 },
  { id: "ps-air-filter", name: "Filter Udara - Pajero Sport", partNumber: "1500A609", price: 250000 },
  { id: "ps-ac-filter", name: "Filter AC - Pajero Sport", partNumber: "7850A002", price: 120000 }, // Same as Xpander
  { id: "ps-fuel-filter", name: "Filter Solar - Pajero Sport", partNumber: "1770A354", price: 350000 },
  { id: "ps-brake-pad-front", name: "Kampas Rem Depan - Pajero Sport", partNumber: "4605B912", price: 850000 },
  { id: "ps-brake-pad-rear", name: "Kampas Rem Belakang - Pajero Sport", partNumber: "4605B484", price: 750000 },
  { id: "ps-battery", name: "Aki Mobil (Battery) - Pajero Sport", partNumber: "MF-80D26L", price: 1250000 },

  // Xforce Parts
  { id: "xf-oil-filter", name: "Filter Oli - Xforce", partNumber: "1230A182", price: 45000 }, // Same as Xpander
  { id: "xf-engine-oil", name: "Oli Mesin 0W-20 (4L)", partNumber: "MZ320981", price: 420000 }, // Same as Xpander
  { id: "xf-ac-filter", name: "Filter AC - Xforce", partNumber: "7850A002", price: 120000 }, // Same as Xpander

  // Outlander Sport Parts
  { id: "os-oil-filter", name: "Filter Oli - Outlander Sport", partNumber: "1230A152", price: 65000 },
  { id: "os-engine-oil", name: "Oli Mesin 5W-30 (4L)", partNumber: "MZ320985", price: 450000 },
  { id: "os-ac-filter", name: "Filter AC - Outlander Sport", partNumber: "7850A013", price: 180000 },

  // Mirage Parts
  { id: "mr-oil-filter", name: "Filter Oli - Mirage", partNumber: "MZ690116", price: 40000 },
  { id: "mr-engine-oil", name: "Oli Mesin 0W-20 (3L)", partNumber: "MZ320980", price: 315000 },
  { id: "mr-ac-filter", name: "Filter AC - Mirage", partNumber: "7803A112", price: 110000 },

  // L300 Parts
  { id: "l300-oil-filter", name: "Filter Oli - L300", partNumber: "MD356000", price: 55000 },
  { id: "l300-engine-oil", name: "Oli Mesin Diesel 15W-40 (5L)", partNumber: "MZ320330", price: 350000 },
  { id: "l300-drain-plug-gasket", name: "Gasket Baut Oli - L300", partNumber: "MD050317", price: 8000 },
  { id: "l300-fuel-filter", name: "Filter Solar - L300", partNumber: "MB220900", price: 60000 },

  // Common Parts
  { id: "common-balancing-weight", name: "Timah Balancing (per roda)", partNumber: "BLC-001", price: 0 },
];
