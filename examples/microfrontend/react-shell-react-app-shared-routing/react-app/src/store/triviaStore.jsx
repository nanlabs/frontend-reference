import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { countryList } from '../services/triviaFetch';

const DEFAULT_TRIVIA_STATE = {
  loading: false,
  showQuestions: false,
  questions: [],
  answers: [],
  tags: {
    loading: false,
    data: [],
    error: null,
  },
  countries: [...countryList],
  error: null,
  currentQuestionIndex: 0,
};

export const useTriviaStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...DEFAULT_TRIVIA_STATE,
        setTags: (data) => set((state) => ({ tags: { ...state.tags, data } }), true, 'SET_TAGS'),
        setTagsLoading: (loading) => set((state) => ({ tags: { ...state.tags, loading } })),
        setTagsError: (error) => set((state) => ({ tags: { ...state.tags, error } })),
        setQuestions: (questions) => set({ questions }),
        setAnswer: (answer, id, isCorrect) =>
          set((state) => ({ answers: [...state.answers, { answer, id, isCorrect }] })),
        setShowQuestions: (showQuestions) => set({ showQuestions }),
        setCountries: (countries) => set({ countries }),
        setLoading: (loading) => set({ loading }),
        setError: (error) => set({ error }),
        setCurrentQuestionIndex: (currentQuestionIndex) => set({ currentQuestionIndex }),
        incrementCurrentQuestionIndex: () => set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
        decrementCurrentQuestionIndex: () => set((state) => ({ currentQuestionIndex: state.currentQuestionIndex - 1 })),
        getOptions: (index) => {
          const { questions } = get();
          const [result] = questions?.filter((question) => question.id === index);
          return [...result.incorrectAnswers, result.correctAnswer];
        },
        getAnswerSaved: (index) => {
          const { answers } = get();
          const [result] = answers.filter((answer) => answer.id === index);
          return result?.answer;
        },
        getResults: () => {
          const { answers, questions } = get();
          const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
          const totalAnswers = answers.length;
          const totalQuestions = questions.length;
          const results = Math.round((correctAnswers / totalAnswers) * 100);
          const missingAnswers = totalQuestions > 0 && totalQuestions - totalAnswers;
          return { results, missingAnswers };
        },
        resetTrivia: () => {
          set({ ...DEFAULT_TRIVIA_STATE });
        },
      }),
      {
        name: 'trivia-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
