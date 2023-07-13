import { useTriviaGlobalStore } from '../store';

export const useStore = () => {
  const setResults = useTriviaGlobalStore((state) => state.setResults);
  const getResults = useTriviaGlobalStore((state) => () => state.getResults());

  return {
    setResults,
    getResults,
  };
};
