import { useEffect } from 'react';

const useRequestAnimationFrame = (fn: () => void) => {
  useEffect(() => {
    let mounted = true;

    const update = () => {
      if (mounted) {
        fn();
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
    return () => {
      mounted = false;
    };
  }, []);
};

export default useRequestAnimationFrame;
