import React from 'react';
import { mount } from 'vueApp/bootstrap';
import useMountedApps from '../hooks/useReactApp';
import { useStore } from '../hooks/useStore';

const VueApp = () => {
  const { getResults } = useStore();
  const { results } = getResults();
  // we are passing the store to the vue app as a prop
  const { ref } = useMountedApps({ mount, store: { results } });
  // we are creating a react component that will be rendered in the container
  const reactComponent = React.createElement('div', { ref }, 'VueApp');
  return reactComponent;
};

export default VueApp;
