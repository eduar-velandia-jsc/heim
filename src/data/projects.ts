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

const ZAJARI: Omit<Project, "image" | "imageHeight"> = {
  date: "01 / 07/2026",
  category: "Remodelación Residencial",
  name: "Proyecto Zajarí – Reconfiguración Arquitectura & Redes",
  challengeTitle: "Desafío y solución técnica",
  challenge:
    "Reingeniería operativa de redes hidrosanitarias y de gas para cambiar la orientación de la estufa y el lavaplatos, optimizando la circulación del área social.",
  specs: [
    "Cielorrasos & Iluminación: Techo técnico en Drywall con perfiles LED lineales empotrados y luminarias dirigibles tipo Spot.",
    "Carpintería Arquitectónica: Mobiliario a medida en maderas de alta densidad (RH) para cocina integral y centro de entretenimiento.",
    "Obra Civil & Redes: Relocalización completa de puntos hidráulicos, de desagüe y acometidas de gas.",
  ],
};

const FONREGINAL: Project = {
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
};

/** Proyectos destacados que muestra la página de inicio. */
export const FEATURED_PROJECTS: Project[] = [
  { ...ZAJARI, image: asset("images/proyecto-zajari.webp"), imageHeight: 608 },
  FONREGINAL,
];

/** Galería completa de la página /proyectos. */
export const ALL_PROJECTS: Project[] = [
  { ...ZAJARI, image: asset("images/proyecto-zajari-alt.webp"), imageHeight: 589 },
  FONREGINAL,
  {
    date: "01 / 03/2026",
    category: "Paisajismo técnico & Obra civil",
    name: "Showroom Solar Sylvannia – Estética & Exhibición",
    image: asset("images/proyecto-showroom-solar.webp"),
    imageHeight: 608,
    challengeTitle: "Desafío y solución técnica",
    challenge:
      "Adecuación de un área exterior para exhibir paneles solares mediante un paisajismo técnico que unió un acabado corporativo de alta gama, drenaje pluvial, caminos peatonales y renovación.",
    specs: [
      "Lecho pétreo en combinación de gravilla de río y piedra dolomita blanca con bordillos confinados.",
      "Camino de adoquines y red completa de drenaje de aguas lluvias con poeta y sifones.",
      "Pintura de bordillos con pintura de alto tráfico.",
      "Pintura de fachada de alto desempeño y aplicación de arte en ventanales.",
    ],
  },
  {
    date: "17/ 04/2025",
    category: "Adecuación corporativa",
    name: "Baño Sylvania – Ampliación y Redes",
    image: asset("images/proyecto-bano-sylvania.webp"),
    imageHeight: 599,
    challengeTitle: "Desafío y solución técnica:",
    challenge:
      "Rediseño hidrosanitario y redistribución espacial en las instalaciones de Sylvania para maximizar el espacio, optimizar la capacidad operativa de la zona húmeda y renovar completamente los acabados.",
    specs: [
      "Demolición y levantamiento de muros para la nueva redistribución espacial.",
      "Ampliación operativa de la zona: pasó de 3 a 4 piezas (2 sanitarios y 2 orinales).",
      "Redistribución de desagües y redes hidrosanitarias.",
      "Instalación de nuevos enchapes, carpintería corporativa y adecuación de divisiones en acero inoxidable.",
      "Instalación de accesorios de baño en acero inoxidable.",
      "Suministro e instalación de techo en PVC.",
    ],
  },
];
