/** Las páginas sin formulario de contacto (p. ej. /legal) envían al formulario de la página de inicio. */
const PAGES_WITHOUT_CONTACT = ["/legal"];

export function contactLink(pathname: string): string {
  return PAGES_WITHOUT_CONTACT.includes(pathname) ? "/#contacto" : "#contacto";
}
