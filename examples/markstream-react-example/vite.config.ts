import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

const { PORT = '3000' } = process.env;

const root = path.resolve(__dirname, 'src');

const vitePluginPWA = () =>
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    devOptions: {
      enabled: false,
    },
    manifest: {
      name: 'examples/markstream-react-example',
      short_name: 'examples/markstream-react-example',
      description: 'examples/markstream-react-example',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), vitePluginPWA()],
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(PORT, 10),
  },
  resolve: {
    alias: {
      '@/': root + '/',
    },
  },
  build: {
    cssMinify: false,
    rolldownOptions: {
      // Suppress the "unintended bundling" error that Rolldown raises for
      // CJS-only packages from extension test/dev dependencies.
      // Using onLog to intercept the specific error message.
      onLog(level: string, log: { message?: string }) {
        if (log.message && log.message.includes('unintended')) return;
      },
    },
  },
});
