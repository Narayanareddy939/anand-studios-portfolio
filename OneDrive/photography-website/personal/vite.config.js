import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Forces Vite to use exactly port 3000
    open: true, // Automatically opens the browser for the user
  },
});
