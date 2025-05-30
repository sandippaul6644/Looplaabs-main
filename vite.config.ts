import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Looplaabs-main/', // 👈 THIS MUST MATCH your GitHub repo name exactly (case-sensitive)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
