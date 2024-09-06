import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/': {
        target: 'https://real-state-api-1dpy.vercel.app',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
