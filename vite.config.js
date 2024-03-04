import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/popup': {
        target: `http://43.202.13.38:8081`,
        changeOrigin: true,
      },
    },
  },
});
