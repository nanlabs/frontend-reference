import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'reactApp/ReactApp';

const useMountApp = () => {
  // ref to pass to the react-app a dom element
  const ref = useRef(null);
  // we need to create a history object to pass to the react-app
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // this is the communication channel between container and react-app
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
    });

    // on every history change "onParentNavigate" will be called
    history.listen(onParentNavigate);
  }, []);

  // we are exposing the ref so the container can use it
  return { ref };
};

export default useMountApp;
