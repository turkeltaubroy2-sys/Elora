import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config tuned for Vercel static hosting.
// `base: '/'` keeps absolute asset paths (`/assets/...`) which Vercel serves correctly.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});
