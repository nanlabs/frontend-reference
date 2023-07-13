import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const mount = (rootElement, { store }) => {
  const root = ReactDOM.createRoot(rootElement);
  // recieve store from container
  root.render(<App store={store} />);
};

if (import.meta.env.MODE === 'development') {
  // STANDALONE MODE
  const devRoot = document.querySelector('#react_app_root');
  if (devRoot) {
    mount(devRoot, { store: null });
  }
}

export { mount };
