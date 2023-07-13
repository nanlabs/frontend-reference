import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const mount = (rootElement, { store }) => {
  // recieve store from container
  const { results } = store;
  const app = createApp(App, { results });
  app.mount(rootElement);
  return app;
};

if (import.meta.env.MODE === 'development') {
  // STANDALONE MODE
  const vueApp = document.querySelector('#app');
  mount(vueApp, { store: null });
}

export { mount };
