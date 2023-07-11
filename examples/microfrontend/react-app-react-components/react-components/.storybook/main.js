import { mergeConfig } from 'vite';
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
};