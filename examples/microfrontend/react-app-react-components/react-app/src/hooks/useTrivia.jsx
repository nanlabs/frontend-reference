import { useEffect } from 'react';
import { useTriviaStore } from '../store/triviaStore';
import { fetchTriviaQuestions, countryList } from '../services/triviaFetch';

export const useQuestionsData = ({ levels, limit, country }) => {
  const questions = useTriviaStore((state) => state.questions);
  const setLoading = useTriviaStore((state) => state.setLoading);
  const setShowQuestions = useTriviaStore((state) => state.setShowQuestions);
  const loading = useTriviaStore((state) => state.loading);
  const fetchError = useTriviaStore((state) => state.error);
  const setQuestions = useTriviaStore((state) => state.setQuestions);
  const setError = useTriviaStore((state) => state.setError);

  useEffect(() => {
    if (levels && limit && country && !questions.length) {
      const fetchQuestions = async () => {
        try {
          setLoading(true);
          const res = await fetchTriviaQuestions({ difficulties: levels, limit, region: country });
          setQuestions(res);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchQuestions();
    }
  }, [levels, limit, country]);

  return { questions, loading, fetchError, setShowQuestions };
};

export const useQuestionTools = () => {
  const currentQuestionIndex = useTriviaStore((state) => state.currentQuestionIndex);
  const setCurrentQuestionIndex = useTriviaStore((state) => state.setCurrentQuestionIndex);
  const incrementCurrentQuestionIndex = useTriviaStore((state) => state.incrementCurrentQuestionIndex);
  const decrementCurrentQuestionIndex = useTriviaStore((state) => state.decrementCurrentQuestionIndex);
  const getAnswer = useTriviaStore((state) => (index) => state.getAnswerSaved(index));
  const getOptions = useTriviaStore((state) => (index) => state.getOptions(index));
  const getResults = useTriviaStore((state) => () => state.getResults());
  const resetTrivia = useTriviaStore((state) => state.resetTrivia);
  const showQuestions = useTriviaStore((state) => state.showQuestions);
  const setAnswer = useTriviaStore((state) => state.setAnswer);

  return {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    incrementCurrentQuestionIndex,
    decrementCurrentQuestionIndex,
    resetTrivia,
    showQuestions,
    setAnswer,
    getAnswer,
    getOptions,
    getResults,
  };
};

export const useCountryList = () => {
  const customCountryList = countryList.map((country) => ({ label: country.name, value: country.code }));
  const allCountriesCode = customCountryList.map((country) => country.value);
  const resultList = [{ label: 'All countries', value: [...allCountriesCode].toString() }, ...customCountryList];
  return resultList;
};

export const useLevelsList = () => {
  const levelsList = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];
  return levelsList;
};

export const useLimitList = () => {
  const limitList = [
    { label: '3', value: 3 },
    { label: '5', value: 5 },
    { label: '10', value: 10 },
  ];
  return limitList;
};
