import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    federation({
      name: 'reactApp',
      filename: 'remoteEntry.js',
      // expose every component
      exposes: {
        './Card': './src/components/Card/index.jsx',
        './Button': './src/components/CustomButton/index.jsx',
        './Header': './src/components/Header/index.jsx',
        './Item': './src/components/Item/index.jsx',
        './Select': './src/components/Select/index.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
