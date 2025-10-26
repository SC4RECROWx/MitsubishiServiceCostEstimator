import type { Vehicle } from "@/lib/types";

export const vehicles: Vehicle[] = [
  {
    id: "xpander",
    name: "Xpander",
    years: [
      { year: 2025, trims: ["Ultimate CVT", "Ultimate MT", "Exceed CVT", "Exceed MT", "GLS CVT", "GLS MT"] },
      { year: 2024, trims: ["Ultimate CVT", "Ultimate MT", "Exceed CVT", "Exceed MT", "GLS CVT", "GLS MT"] },
      { year: 2023, trims: ["Ultimate CVT", "Ultimate MT", "Exceed CVT", "Exceed MT", "GLS CVT", "GLS MT"] },
      { year: 2022, trims: ["Ultimate CVT", "Ultimate MT", "Exceed CVT", "Exceed MT", "GLS CVT", "GLS MT"] },
      { year: 2021, trims: ["Ultimate CVT", "Ultimate MT", "Ultimate MT", "Exceed CVT", "Exceed MT", "GLS CVT", "GLS MT", "GLX MT"] },
      { year: 2020, trims: ["Ultimate AT", "Ultimate MT", "Ultimate MT", "Exceed AT", "Exceed MT", "GLS AT", "GLS MT", "GLX MT"] },
      { year: 2019, trims: ["Ultimate AT", "Ultimate MT", "Ultimate MT", "Exceed AT", "Exceed MT", "GLS AT", "GLS MT", "GLX MT"] },
      { year: 2018, trims: ["Ultimate AT", "Ultimate MT", "Exceed AT", "Exceed MT", "GLS MT", "GLX MT"] },
      { year: 2017, trims: ["Ultimate AT", "Ultimate MT", "Exceed AT", "Exceed MT", "GLS MT", "GLX MT"] },
    ],
  },
  {
    id: "xpander-cross",
    name: "Xpander Cross",
    years: [
      { year: 2025, trims: ["Premium CVT", "MT"] },
      { year: 2024, trims: ["Premium CVT", "MT"] },
      { year: 2023, trims: ["Premium CVT", "MT"] },
      { year: 2022, trims: ["Premium CVT", "MT"] },
      { year: 2021, trims: ["Premium CVT", "MT"] },
      { year: 2020, trims: ["Premium AT", "MT"] },
      { year: 2019, trims: ["Premium AT", "MT"] },
    ],
  },
  {
    id: "pajero-sport",
    name: "Pajero Sport",
    years: [
        { year: 2015, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "GLS 4x2 MT", "GLX 4x4 MT", "V6 Bensin"] },
        { year: 2014, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "GLS 4x2 MT", "GLX 4x4 MT", "V6 Bensin"] },
        { year: 2013, trims: ["Dakar 4x2 AT", "Exceed 4x2 AT", "GLS 4x2 MT", "GLX 4x4 MT"] },
        { year: 2012, trims: ["Dakar 4x2 AT", "Exceed 4x2 AT", "GLS 4x2 MT", "GLX 4x4 MT"] },
        { year: 2011, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "GLS 4x2 MT", "GLX 4x4 MT"] },
        { year: 2010, trims: ["Exceed 4x4 AT", "Exceed 4x2 AT", "GLS 4x2 MT", "GLX 4x4 MT"] },
        { year: 2009, trims: ["Exceed 4x4 AT", "Exceed 4x2 AT", "GLS 4x2 MT"] },
    ],
  },
  {
    id: "pajero-sport-anps",
    name: "All New Pajero Sport",
    years: [
        { year: 2024, trims: ["Dakar Ultimate 4x4 AT", "Dakar Ultimate 4x2 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT"] },
        { year: 2023, trims: ["Dakar Ultimate 4x4 AT", "Dakar Ultimate 4x2 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT"] },
        { year: 2022, trims: ["Dakar Ultimate 4x4 AT", "Dakar Ultimate 4x2 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT"] },
        { year: 2021, trims: ["Dakar Ultimate 4x4 AT", "Dakar Ultimate 4x2 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT"] },
        { year: 2020, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT", "Ultimate 4x2 AT"] },
        { year: 2019, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT", "Ultimate 4x2 AT"] },
        { year: 2018, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT", "Ultimate 4x2 AT"] },
        { year: 2017, trims: ["Dakar 4x4 AT", "Dakar 4x2 AT", "Exceed 4x2 AT", "Exceed 4x2 MT", "GLX 4x4 MT", "Ultimate 4x2 AT"] },
    ],
  },
  {
    id: "xforce",
    name: "Xforce",
    years: [
        { year: 2024, trims: ["Ultimate CVT", "Exceed CVT"] },
        { year: 2023, trims: ["Ultimate CVT", "Exceed CVT"] },
    ],
  },
  {
    id: "outlander-sport",
    name: "Outlander Sport",
    years: [
        { year: 2021, trims: ["PX", "GLS", "GLX"] },
        { year: 2020, trims: ["PX", "GLS", "GLX"] },
        { year: 2019, trims: ["PX", "GLS", "GLX"] },
        { year: 2018, trims: ["PX", "GLS", "GLX"] },
        { year: 2017, trims: ["PX", "GLS", "GLX"] },
        { year: 2016, trims: ["PX", "GLS", "GLX"] },
        { year: 2015, trims: ["PX", "GLS", "GLX"] },
        { year: 2014, trims: ["PX", "GLS", "GLX"] },
    ],
  },
  {
    id: "triton",
    name: "Triton",
    years: [
        { year: 2024, trims: ["Ultimate AT", "Exceed MT", "GLS MT", "HDX MT"] },
        { year: 2023, trims: ["Ultimate AT", "Exceed MT", "GLS MT", "HDX MT"] },
        { year: 2022, trims: ["Ultimate AT", "Exceed MT", "GLS MT", "HDX MT"] },
    ],
  },
  {
    id: "mirage",
    name: "Mirage",
    years: [
        { year: 2018, trims: ["Exceed CVT", "GLS CVT", "GLX MT"] },
        { year: 2017, trims: ["Exceed CVT", "GLS CVT", "GLX MT"] },
        { year: 2016, trims: ["Exceed CVT", "GLS CVT", "GLX MT"] },
    ],
  },
  {
    id: "l300",
    name: "L300",
    years: [
        { year: 2024, trims: ["Cab & Chassis", "Pickup Flatbed"] },
        { year: 2023, trims: ["Cab & Chassis", "Pickup Flatbed"] },
        { year: 2022, trims: ["Cab & Chassis", "Pickup Flatbed"] },
    ],
  },
];
