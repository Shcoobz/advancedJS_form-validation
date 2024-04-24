import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react_figma_splash-page/',
  build: {
    outDir: 'build',
  },
});
