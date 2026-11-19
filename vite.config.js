// La web de Rubi · configuración de Vite.
//   npm run dev       servidor de desarrollo
//   npm run build     dist/ lista para subir a GitHub Pages (rutas relativas: vale en cualquier carpeta o dominio)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  // three.js (el visor 3D de las placas) va en su propio archivo y solo se descarga al abrir una ficha: no avisar por su tamaño
  build: { outDir: 'dist', target: 'es2020', chunkSizeWarningLimit: 800 },
});
