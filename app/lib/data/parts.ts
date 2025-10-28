import type { Part } from "@/lib/types";

export const parts: Part[] = [
  // Xpander Parts
  { id: "xp-engine-oil-1l", name: "Engine Oil 0W-20 1L", partNumber: "MZ690220", price: 129000 },
  { id: "xp-oil-filter", name: "Oil Filter - Xpander", partNumber: "1230A182", price: 68500 },
  { id: "xp-drain-plug-gasket", name: "Gasket, Engine Oil Drain Plug", partNumber: "MD050317", price: 20000 },
  { id: "xp-ac-filter", name: "Filter, A/C", partNumber: "7850A002", price: 168000 },
  { id: "xp-engine-flush", name: "Engine Flush", partNumber: "CHEM-FLUSH", price: 140000 },
  { id: "xp-brake-pad-front", name: "Pad Kit, Front Brake - Xpander", partNumber: "4605B595", price: 600000 },
  { id: "xp-brake-shoe-rear", name: "Shoe Kit, Rear Brake - Xpander", partNumber: "4800A238", price: 480000 },
  { id: "xp-battery", name: "Battery, 34B19L", partNumber: "spb07001", price: 1030000 },
  { id: "xp-battery-asg", name: "Battery, ASG (for ISS) - Xpander", partNumber: "SPB9807011", price: 3090000 },
  { id: "xp-transm-oil-mt-1l", name: "Transmission Oil MT 1L", partNumber: "MZ-MT-OIL-1L", price: 131000 },
  { id: "xp-transm-oil-atf-ma1-1l", name: "Transmission Oil ATF-MA1 1L", partNumber: "MZ-ATF-MA1-1L", price: 215000 },
  { id: "xp-transm-oil-cvt-ma1-4l", name: "Transmission Oil CVT-MA1 4L", partNumber: "MZ-CVT-MA1-4L", price: 1065675 },
  { id: "xp-air-filter", name: "Saringan Udara - Xpander", partNumber: "1500a687", price: 150000 },
  { id: "xp-alternator-belt", name: "Belt Alternator - Xpander", partNumber: "1340a181", price: 137000 },
  { id: "xp-spark-plug", name: "Busi - Xpander", partNumber: "1822a086", price: 335000 },
  
  // All New Pajero Sport Parts (Dakar)
  { id: "ps-dakar-engine-oil", name: "Engine Oil 5W-30 5.5L", partNumber: "MZ690221", price: 650000 },
  { id: "ps-dakar-oil-filter", name: "Filter Oli", partNumber: "1230A154", price: 210000 },
  { id: "ps-dakar-drain-plug-gasket", name: "Gasket, Oil Drain Plug", partNumber: "MF660031", price: 9000 },
  { id: "ps-dakar-ac-filter", name: "Filter AC", partNumber: "7850A002", price: 330000 },
  { id: "ps-dakar-brake-pad-front", name: "Kampas Rem Depan", partNumber: "4605B925", price: 1860000 },
  { id: "ps-dakar-brake-pad-rear", name: "Kampas Rem Belakang", partNumber: "4605B929", price: 1540000 },
  { id: "ps-dakar-battery", name: "Battery, 80D26L", partNumber: "MZ690020", price: 1500000 },
  { id: "ps-dakar-air-filter", name: "Filter Udara", partNumber: "PS-DAKAR-AIR-FILTER", price: 341000 },

  // All New Pajero Sport Parts (Exceed / GLX)
  { id: "ps-exceed-engine-oil-1l", name: "Engine Oil 10W-30 1L", partNumber: "MZ-EXCEED-OIL-1L", price: 105000 },
  { id: "ps-exceed-oil-filter", name: "Filter Oli", partNumber: "PS-EXCEED-FILTER", price: 180000 },
  { id: "ps-exceed-ac-filter", name: "Filter AC", partNumber: "PS-EXCEED-AC", price: 330000 },
  { id: "ps-exceed-brake-pad-front", name: "Kampas Rem Depan", partNumber: "PS-EXCEED-PAD-F", price: 867000 },
  { id: "ps-exceed-brake-pad-rear", name: "Kampas Rem Belakang", partNumber: "PS-EXCEED-PAD-R", price: 1000000 },
  { id: "ps-mtf-oil-1l", name: "Oli Transmisi MTF 1L", partNumber: "PS-MTF-OIL-1L", price: 131000 },
  { id: "ps-atf-pa-1l", name: "Oli AT ATF PA 1L", partNumber: "MZ-ATF-PA-1L", price: 200000 },
  { id: "ps-transfer-oil-1l", name: "Oli Transfer 4x4 1L", partNumber: "PS-TRANSFER-OIL-1L", price: 131000 },
  { id: "ps-mut", name: "MUT", partNumber: "CHEM-MUT", price: 348000 },
  { id: "ps-fuel-filter", name: "Fuel Filter", partNumber: "PS-FUEL-FILTER-GEN", price: 424000 },
  { id: "ps-purging", name: "Purging", partNumber: "CHEM-PURGE", price: 143960 },
  { id: "ps-exceed-air-filter", name: "Filter Udara", partNumber: "PS-EXCEED-AIR-FILTER", price: 385000 },

  // All New Pajero Sport (All Types)
  { id: "ps-battery", name: "Aki", partNumber: "PS-BATTERY-GEN", price: 1980000 },

  // Xforce Parts
  { id: "xf-engine-oil", name: "Engine Oil 0W-20 4L", partNumber: "MZ690220-4L", price: 400000 },
  { id: "xf-oil-filter", name: "Oil Filter - Xforce", partNumber: "1230A182", price: 55000 },

  // Outlander Sport Parts
  { id: "os-engine-oil", name: "Engine Oil 5W-30 4L", partNumber: "MZ690221-4L", price: 480000 },
  { id: "os-oil-filter", name: "Oil Filter - Outlander Sport", partNumber: "1230A105", price: 75000 },
  { id: "os-ac-filter", name: "Filter, A/C - Outlander Sport", partNumber: "7803A109", price: 300000 },
  { id: "os-brake-pad-front", name: "Kampas Rem Depan - Outlander Sport", partNumber: "4605A875", price: 1610000 },
  { id: "os-brake-pad-rear", name: "Kampas Rem Belakang - Outlander Sport", partNumber: "4605A568", price: 1600000 },
  { id: "os-oil-cvt-j4", name: "Oli CVTF J-4 1L", partNumber: "MZ-CVTF-J4-1L", price: 169000 },
  { id: "os-oil-mt-75w80", name: "Oli MTF 75W 80 1L", partNumber: "MZ-MTF-75W80-1L", price: 131000 },
  { id: "os-alternator-belt", name: "Belt Alternator - Outlander Sport", partNumber: "OS-BELT-ALT", price: 1155000 },

  // Mirage Parts
  { id: "mr-oil-filter", name: "Oil Filter", partNumber: "MR-OIL-FILTER", price: 68500 },
  { id: "mr-ac-filter", name: "Filter, AC", partNumber: "MR-AC-FILTER", price: 168000 },
  { id: "mr-brake-pad-front", name: "Kampas Rem Depan", partNumber: "MR-PAD-F", price: 880000 },
  { id: "mr-brake-shoe-rear", name: "Kampas Rem Belakang", partNumber: "MR-SHOE-R", price: 1120000 },
  { id: "mr-spark-plug", name: "Busi", partNumber: "MR-SPARK", price: 335000 },
  { id: "mr-alternator-belt", name: "Belt Alternator", partNumber: "MR-BELT", price: 231000 },

  // Common Parts
  { id: "common-brake-cleaner", name: "Brake Cleaner", partNumber: "CHEM-BRKCLN", price: 107380 },
];
