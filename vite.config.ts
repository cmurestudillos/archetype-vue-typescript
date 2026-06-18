import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    host: true, // Permite conexiones externas (útil para Docker/contenedores)
    open: true, // Abre automáticamente el navegador
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  preview: {
    port: 8080,
    host: true,
    open: true,
  },
  // Optimización de dependencias
  optimizeDeps: {
    include: ['vue'],
  },
  // Variables de entorno
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
});
