import React from 'react';
import { mount } from 'reactApp/ReactApp';
import useMountedApps from '../hooks/useReactApp';
import { useStore } from '../hooks/useStore';

const ReactApp = () => {
  const { setResults } = useStore();
  // we are passing the store to the react app as a prop
  const { ref } = useMountedApps({ mount, store: { setResults } });
  // we are creating a react component that will be rendered in the container
  const reactComponent = React.createElement('div', { ref }, 'ReactApp');
  return reactComponent;
};

export default ReactApp;
