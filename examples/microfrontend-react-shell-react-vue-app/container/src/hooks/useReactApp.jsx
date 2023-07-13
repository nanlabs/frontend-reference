import { useEffect, useRef } from 'react';

const useMountedApps = ({ mount, store = null }) => {
  // this hook recieves the mount function and the store as props
  // then it creates a ref that will be used to mount the app
  // as a react component
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, { store });
  }, []);
  return { ref };
};

export default useMountedApps;
