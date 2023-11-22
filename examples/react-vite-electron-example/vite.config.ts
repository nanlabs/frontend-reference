import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import electron from 'vite-electron-plugin';
import { VitePWA } from 'vite-plugin-pwa';

const { PORT = '3000' } = process.env;

const root = path.resolve(__dirname, 'src');

const vitePluginPWA = () =>
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: 'react-vite-electron-example',
      short_name: 'react-vite-electron-example',
      description: 'react-vite-electron-example',
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

const electronPlugin = () =>
  electron({
    include: [
      // The Electron source codes directory
      'electron',
    ],
  });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), vitePluginPWA(), electronPlugin()],
  base: process.env.VITE_APP_BASE_URL,
  server: {
    host: '0.0.0.0',
    port: parseInt(PORT, 10),
  },
  resolve: {
    alias: {
      '@/': `${root}/`,
    },
  },
  esbuild: {
    loader: 'tsx',
    include: 'src/**/*.{ts,tsx,js,jsx}',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
});
