/** Resuelve un recurso de `public/assets` respetando el `base` de Vite (p. ej. `/heim/` en GitHub Pages). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}assets/${path}`;
}
