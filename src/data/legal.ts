export type LegalBlock =
  | { type: "title"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

const title = (text: string): LegalBlock => ({ type: "title", text });
const heading = (text: string): LegalBlock => ({ type: "heading", text });
const p = (text: string): LegalBlock => ({ type: "paragraph", text });

export const LEGAL_CONTENT: LegalBlock[] = [
  title("TÉRMINOS, CONDICIONES Y POLÍTICA DE PRIVACIDAD"),
  p("En cumplimiento de la normativa vigente de protección de datos personales, Heim adopta la siguiente política para garantizar el correcto manejo, almacenamiento y protección de la información recopilada a través de nuestros canales digitales y de atención al cliente."),
  heading("1. Marco Normativo y Legal"),
  p("Nuestra política de tratamiento de información se rige bajo los preceptos de la Constitución Política de Colombia (Artículo 15) sobre el derecho a la intimidad y al Habeas Data, la Ley Estatutaria 1581 de 2012 que regula el régimen general de protección de datos, y el Decreto Reglamentario 1074 de 2015 (que compila el Decreto 1377 de 2013)."),
  heading("2. Responsable del Tratamiento de Datos"),
  p('Heim (en adelante "la empresa"), especializada en diseño, remodelación, acabados arquitectónicos y mantenimiento, es la responsable del tratamiento de los datos personales recopilados.'),
  heading("3. Finalidad del Tratamiento de Datos"),
  p("Los datos personales suministrados (nombres, teléfonos, correos electrónicos, direcciones e información técnica de proyectos) serán recolectados, almacenados y utilizados exclusivamente para las siguientes finalidades:"),
  p("Gestión comercial, envío de cotizaciones y asesoría en proyectos de interiorismo y obra civil."),
  p("Coordinación de visitas técnicas, ejecución de contratos y prestación de servicios adquiridos."),
  p("Envío de información relevante sobre portafolio, avances de proyectos o comunicaciones corporativas de la marca."),
  p("Cumplimiento de obligaciones legales y contractuales con nuestros clientes y proveedores."),
  heading("4. Derechos de los Titulares (Derechos ARCO)"),
  p("Como titular de tus datos personales, y amparado por la ley, tienes derecho a:"),
  p("Acceder: Conocer qué datos personales tenemos en nuestra base de datos."),
  p("Rectificar: Solicitar la actualización o corrección de datos inexactos o incompletos."),
  p("Suprimir: Solicitar la eliminación de tus datos cuando consideres que ya no son necesarios para los fines previstos."),
  p("Revocar: Retirar la autorización otorgada para el tratamiento de los mismos."),
  p("Para ejercer estos derechos, puedes comunicarte con nosotros a través de nuestros canales oficiales de atención o el botón de contacto directo en la web."),
  title("POLÍTICA DE GARANTÍAS"),
  p("En Heim garantizamos la calidad, ejecución y durabilidad de nuestros proyectos de arquitectura, remodelación y acabados."),
  heading("1. Marco Normativo"),
  p("Nuestras políticas de calidad y respaldo se ajustan estrictamente a lo establecido en la Ley 1480 de 2011 (Estatuto del Consumidor), específicamente en su Artículo 7 (Garantía Legal), Artículo 8 (Término de la Garantía) y Artículo 11 (Aspectos incluidos en la garantía), asegurando la idoneidad y seguridad de los servicios prestados."),
  heading("2. Cobertura de la Garantía"),
  p("La garantía aplica exclusivamente sobre los defectos atribuibles directamente a la ejecución de la obra, instalación, mano de aplicación o deficiencias en los materiales suministrados directamente por Heim. Esto incluye:"),
  p("Defectos estructurales o constructivos derivados de la intervención directa."),
  p("Fallas en acabados, enchapes, pintura o sistemas hidrosanitarios instalados por nuestro equipo."),
  p("Problemas de funcionamiento en carpintería arquitectónica o elementos metálicos montados en obra."),
  heading("3. Vigencia de la Garantía"),
  p("Los tiempos de cobertura varían según la naturaleza del proyecto:"),
  p("Obra Civil, Estructuras y Redes (Plomería/Eléctrica): Cobertura extendida por defectos de construcción según los términos específicos del contrato del proyecto."),
  p("Acabados, Pintura y Carpintería: Garantía aplicable por defectos de fábrica o instalación reportados oportunamente tras la entrega oficial a satisfacción."),
  heading("4. Exclusiones de la Garantía"),
  p("La garantía no cubre daños ocasionados por:"),
  p("Mal uso, desgaste natural por el uso cotidiano, o manipulación indebida de las instalaciones por parte de terceros."),
  p("Falta de mantenimiento preventivo adecuado en redes, superficies o equipos."),
  p("Modificaciones, alteraciones o reparaciones realizadas por personal ajeno a Heim después de la entrega oficial."),
  p("Fuerzas mayores, eventos fortuitos, humedad extrema por filtraciones ajenas a la obra realizada, o asentamientos estructurales del edificio preexistentes."),
  heading("5. Procedimiento para Hacer Efectiva la Garantía"),
  p("El cliente deberá reportar la novedad por escrito o a través de nuestros canales de atención oficiales, adjuntando soporte fotográfico o descripción del caso."),
  p("Heim realizará una visita de inspección técnica para evaluar el origen de la falla."),
  p("En caso de dictaminarse procedente, se coordinará la ejecución de los trabajos correctivos sin costo adicional dentro de un plazo razonable, cumpliendo con los parámetros de idoneidad estipulados por la ley."),
];
