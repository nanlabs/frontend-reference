import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

const DEFAULT_TRIVIA_STATE = {
  results: {},
};

export const useTriviaGlobalStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...DEFAULT_TRIVIA_STATE,
        setResults: (results) => set({ results }, true, 'SET_RESULTS'),
        getResults: () => get().results,
      }),
      {
        name: 'store',
        storage: createJSONStorage(() => sessionStorage),
      }
    ),
    { name: 'trivia-global-store' }
  )
);
