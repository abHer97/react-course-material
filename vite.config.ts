/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Habilita vitest en todos los archivos de test sin necesidad de importar las funciones de test
    globals: true,
    // Le dice a vitest que archivos seran los que se usaran para tests
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    // Para que @testing-library pueda montar los componentes de react en un dom (sin navegador) y testear
    environment: 'jsdom',
  },
});
