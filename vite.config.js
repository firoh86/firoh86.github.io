// La web de Rubi · configuración de Vite.
//   npm run dev       servidor de desarrollo
//   npm run build     dist/ lista para subir a GitHub Pages (rutas relativas: vale en cualquier carpeta o dominio)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  // cuándo se construyó: la demo de La Forja se abre con ?v=<esto>, para que tras cada subida el navegador pida su
  // página nueva y no use la que tenía guardada (GitHub Pages deja guardarla 10 minutos)
  define: { __CONSTRUIDA__: JSON.stringify(String(Date.now())) },
  // three.js (el visor 3D de las placas) va en su propio archivo y solo se descarga al abrir una ficha: no avisar por su tamaño
  build: { outDir: 'dist', target: 'es2020', chunkSizeWarningLimit: 800 },
});
