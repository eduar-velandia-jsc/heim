import { asset } from "../lib/asset";

export type Service = {
  title: string;
  description: string;
  items: string[];
  icon: { src: string; size: number };
};

export const SERVICES: Service[] = [
  {
    title: "Diseño & Remodelación",
    description: "Transformación completa de espacios residenciales y comerciales.",
    items: [
      "Construcción en seco: Muros livianos, divisiones y cielos rasos en drywall, PVC y superboard.",
      "Proyectos a medida: Remodelación integral de cocinas, baños, oficinas y obra blanca.",
    ],
    icon: { src: asset("icons/service-plano.png"), size: 50 },
  },
  {
    title: "Acabados & Decoración",
    description: "Transformación estética de superficies interiores y exteriores para crear espacios con carácter y estilo.",
    items: [
      "Revestimientos : Pintura y acabados para todo tipo de muros, fachadas y estructuras.",
      "Superficies y pisos: Instalación integral de revestimientos  y paneles decorativos.",
    ],
    icon: { src: asset("icons/service-rodillo.png"), size: 36 },
  },
  {
    title: "Facilities & Mantenimiento Integral",
    description: "Soporte técnico para garantizar la operatividad de sus instalaciones.",
    items: [
      "Mantenimiento Integral: Infraestructura, redes hidrosanitarias, Drywall, fachadas y pintura especializada.",
      "Adecuaciones & Fit-Outs: Reconfiguración de espacios, iluminación, canalización de redes y carpintería.",
    ],
    icon: { src: asset("icons/service-herramientas.png"), size: 50 },
  },
  {
    title: "Domótica",
    description: "Tecnología e iluminación inteligente para confort y seguridad.",
    items: [
      "Automatización: Control de iluminación, persianas y cerraduras digitales.",
      "Espacios conectados: Equipamiento de salas de juntas y sonido digital.",
    ],
    icon: { src: asset("icons/service-casa-inteligente.png"), size: 40 },
  },
];
