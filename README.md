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

| Ruta          | Contenido                                                                                                   | Nodo de Figma |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| `/`           | Hero con botón de WhatsApp, estadísticas, quiénes somos, servicios, ¿por qué Heim?, cobertura, proceso, proyectos, clientes, contacto | `4:3` |
| `/proyectos`  | Galería de 4 proyectos destacados + contacto                                                                 | `2385:32` |
| `/legal`      | Términos, condiciones, política de privacidad y política de garantías                                        | `2353:206` |

`Header` y `Footer` son compartidos (`src/components/Layout.tsx`). `/servicios` redirige a la sección de servicios del inicio: su diseño se eliminó del archivo de Figma.

## Estructura

```
public/assets/     imágenes, logos e íconos exportados de Figma
src/components/    Header, Footer, ContactSection, ProjectsSection, ProjectCard…
src/data/          contenido (servicios, proyectos, contacto, textos legales)
src/pages/         Home, Projects, Legal
src/styles/        tokens y estilos globales
```

## Formulario de cotización

Las solicitudes se envían con [FormSubmit](https://formsubmit.co) a `heimcreandoambientes@gmail.com` (configurado en `src/data/contact.ts`). La primera vez que alguien envía el formulario, FormSubmit manda a ese buzón un correo de activación: hay que abrirlo y confirmar una sola vez. Desde ese momento cada solicitud llega como un correo con los datos en una tabla.

## Recursos

Los recursos se exportaron como PNG/WebP renderizando cada nodo en Figma. Los íconos vectoriales quedaron en PNG a 1x. Si se necesitan SVG nítidos en pantallas retina, se pueden reemplazar en `public/assets/icons/` con el mismo nombre.

## Despliegue

El sitio se publica en GitHub Pages en <https://eduar-velandia-jsc.github.io/heim/>.

- `vite.config.ts` usa `base: "/heim/"`; el router usa `basename={import.meta.env.BASE_URL}`.
- Las rutas a `public/assets` pasan por `asset()` (`src/lib/asset.ts`), que antepone `import.meta.env.BASE_URL`.
- `.github/workflows/deploy.yml` construye y despliega en cada push a `main`. Copia `dist/index.html` a `dist/404.html` para que las rutas profundas (`/heim/proyectos`) funcionen al recargar.
