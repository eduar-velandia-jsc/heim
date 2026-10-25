import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/heim/",
  plugins: [react()],
  define: {
    // Cambia en cada compilación: se añade a las URLs de public/assets para que el navegador
    // no muestre fotos viejas guardadas en caché cuando se reemplaza un archivo con el mismo nombre.
    __ASSET_VERSION__: JSON.stringify(Date.now().toString(36)),
  },
});
