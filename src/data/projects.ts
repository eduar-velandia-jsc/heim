import { asset } from "../lib/asset";

export type Project = {
  date: string;
  category: string;
  name: string;
  image: string;
  imageHeight: number;
  challengeTitle: string;
  challenge: string;
  specs: string[];
};

export const PROJECTS: Project[] = [
  {
    date: "01 / 07/2026",
    category: "Remodelación Residencial",
    name: "Proyecto Zajarí – Reconfiguración Arquitectura & Redes",
    image: asset("images/proyecto-zajari.webp"),
    imageHeight: 608,
    challengeTitle: "Desafío y solución técnica",
    challenge:
      "Reingeniería operativa de redes hidrosanitarias y de gas para cambiar la orientación de la estufa y el lavaplatos, optimizando la circulación del área social.",
    specs: [
      "Cielorrasos & Iluminación: Techo técnico en Drywall con perfiles LED lineales empotrados y luminarias dirigibles tipo Spot.",
      "Carpintería Arquitectónica: Mobiliario a medida en maderas de alta densidad (RH) para cocina integral y centro de entretenimiento.",
      "Obra Civil & Redes: Relocalización completa de puntos hidráulicos, de desagüe y acometidas de gas.",
    ],
  },
  {
    date: "17/ 04/2025",
    category: "Integración corporativa & Branding",
    name: "Fondo de Empleados Fonreginal – Redistribución & Renovación Integral",
    image: asset("images/proyecto-fonreginal.webp"),
    imageHeight: 599,
    challengeTitle: "Desafío y solución técnica:",
    challenge:
      "Adecuación para unificar la nueva identidad de marca del fondo de empleados con la optimización física de la oficina, aumentando la capacidad de operación sin perder ergonomía.",
    specs: [
      "Redistribución arquitectónica para escalar de 10 a 14 puestos de trabajo operativos.",
      "Reestructuración y cableado estructurado oculto para soportar la nueva densidad de puestos.",
      "Dotación y montaje de mobiliario corporativo a medida, aplicación de pintura institucional.",
      "Fabricación e instalación de aviso corporativo iluminado integrado al concepto del rebranding.",
    ],
  },
];
