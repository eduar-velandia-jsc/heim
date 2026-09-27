export type Service = {
  title: string;
  description: string;
  items: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Diseño & Remodelación",
    description: "Transformación completa de espacios residenciales y comerciales.",
    items: [
      "Construcción en seco: Muros livianos, divisiones y cielos rasos en drywall, PVC y superboard.",
      "Proyectos a medida: Remodelación integral de cocinas, baños, oficinas y obra blanca.",
    ],
  },
  {
    title: "Acabados & Decoración",
    description: "Transformación estética de superficies interiores y exteriores para crear espacios con carácter y estilo.",
    items: [
      "Revestimientos : Pintura y acabados para todo tipo de muros, fachadas y estructuras.",
      "Superficies y pisos: Instalación integral de revestimientos  y paneles decorativos.",
    ],
  },
  {
    title: "Mantenimiento Locativo",
    description: "Soporte técnico continuo para conservar tus instalaciones operativas.",
    items: [
      "Mantenimiento integral: Reparación de estructuras plomería en drywall, fachadas y pintura.",
      "Adecuaciones: Armado de muebles, iluminación, cableado y persianas.",
    ],
  },
  {
    title: "Domótica",
    description: "Tecnología e iluminación inteligente para confort y seguridad.",
    items: [
      "Automatización: Control de iluminación, persianas y cerraduras digitales.",
      "Espacios conectados: Equipamiento de salas de juntas y sonido digital.",
    ],
  },
];
