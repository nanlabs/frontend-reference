import React from 'react';
import useMountApp from '../hooks/useMountApp';

const ReactApp = () => {
  const { ref } = useMountApp();
  const reactComponent = React.createElement('div', { ref }, 'React App');
  return reactComponent;
};

export default ReactApp;
