import React from 'react';
import ReactDOM from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App.jsx';

const mount = (rootElement, { onNavigate, defaultHistory, initialPath }) => {
  const root = ReactDOM.createRoot(rootElement);
  // when connecting to container, we want to use memory history
  const history =
    defaultHistory ||
    createMemoryHistory({
      // comes from container
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  root.render(<App history={history} />);

  return {
    // this is for container to update the location
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// when running in development in isolation, mount immediately
if (import.meta.env.MODE === 'development') {
  const devRoot = document.querySelector('#react_app_root');
  if (devRoot) {
    // in isolation, we want to use browser history
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
