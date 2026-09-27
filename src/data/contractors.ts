export type Contractor = {
  name: string;
  rating: string;
  reviews: string;
  area: string;
  phone: string;
  email: string;
  experience: string;
  specialties: string[];
};

const SHARED = {
  rating: "4.9",
  reviews: "(342 reviews)",
  area: "Serving Metro Area",
  phone: "(555) 123-4567",
  email: "info@premierroofing.com",
  experience: "25 years in business",
  specialties: ["Residential", "Commercial", "Emergency Repairs"],
};

export const CONTRACTORS: Contractor[] = [
  { name: "Elite Roof Masters", ...SHARED },
  { name: "Reliable Roofing Co.", ...SHARED },
];
