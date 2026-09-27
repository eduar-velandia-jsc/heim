# Heim · Creando ambientes

Sitio web de Heim implementado desde el archivo de Figma *Roofing Services (Community)*.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- React Router para las rutas
- CSS propio por componente, con tokens de diseño en `src/styles/global.css` (sin Tailwind)
- Tipografías de Google Fonts (Inter, Be Vietnam Pro, Montserrat, Urbanist, Poppins, Plus Jakarta Sans, Lato, Work Sans)

## Scripts

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # typecheck + build de producción en dist/
npm run preview    # sirve el build
npm run typecheck  # solo TypeScript
```

## Rutas

| Ruta          | Contenido                                                                                       | Nodos de Figma |
| ------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| `/`           | Hero, estadísticas, quiénes somos, servicios, ¿por qué Heim?, cobertura, proceso, proyectos, clientes, contacto | `4:3` |
| `/proyectos`  | Proyectos destacados + contacto                                                                 | `2310:105` |
| `/servicios`  | "Soluciones que se adaptan" con tarjetas de contratista, FAQ y contacto                          | `27:11`, `36:116`, `36:117`, `36:118`, `36:160`, `36:161`, `36:113`, `36:204`, `20:6` |

`Header` y `Footer` son compartidos (`src/components/Layout.tsx`). Los nodos `2193:98` (Testimonial) y `2228:18` (Rectangle 4) están vacíos en Figma, así que no tienen implementación.

## Estructura

```
public/assets/     imágenes, logos e íconos exportados de Figma
src/components/    Header, Footer, ContactSection, ProjectCard, ContractorCard, FaqSection…
src/data/          contenido (servicios, proyectos, contratistas)
src/pages/         Home, Projects, Services
src/styles/        tokens y estilos globales
```

## Recursos

Los recursos se exportaron como PNG/WebP renderizando cada nodo en Figma. Los íconos vectoriales quedaron en PNG a 1x. Si se necesitan SVG nítidos en pantallas retina, se pueden reemplazar en `public/assets/icons/` con el mismo nombre.

## Despliegue

El sitio se publica en GitHub Pages en <https://eduar-velandia-jsc.github.io/heim/>.

- `vite.config.ts` usa `base: "/heim/"`; el router usa `basename={import.meta.env.BASE_URL}`.
- Las rutas a `public/assets` pasan por `asset()` (`src/lib/asset.ts`), que antepone `import.meta.env.BASE_URL`.
- `.github/workflows/deploy.yml` construye y despliega en cada push a `main`. Copia `dist/index.html` a `dist/404.html` para que las rutas profundas (`/heim/proyectos`) funcionen al recargar.
