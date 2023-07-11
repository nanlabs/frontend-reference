import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'vueApp',
      filename: 'remoteEntry.js',
      // expose entire app
      exposes: {
        './bootstrap': './src/bootstrap.js',
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
  },
});
