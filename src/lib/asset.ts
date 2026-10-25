/**
 * Resuelve un recurso de `public/assets` respetando el `base` de Vite (p. ej. `/heim/` en GitHub Pages).
 * Añade `?v=<versión de la compilación>` para que cada publicación invalide la caché del navegador.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}assets/${path}?v=${__ASSET_VERSION__}`;
}
