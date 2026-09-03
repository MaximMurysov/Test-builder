import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // Node 17+ резолвит localhost в ::1 первым; без этого Vite слушает
    // только IPv6, а браузер стучится на 127.0.0.1 и получает отказ
    host: '127.0.0.1',
    port: 3000,
  },
});
