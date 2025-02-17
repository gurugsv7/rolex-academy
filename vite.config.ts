// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/rolex-academy/', // Matches repository name
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  }
});
