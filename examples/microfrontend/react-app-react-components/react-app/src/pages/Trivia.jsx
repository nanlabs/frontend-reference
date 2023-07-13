import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import { useQuestionsData, useCountryList, useLevelsList, useLimitList, useQuestionTools } from '@/hooks/useTrivia';
import useLazyComponent from '@/hooks/useLazyComponent';

export const DEFAULT_QUESTION_PARAMS = {
  levels: null,
  limit: null,
  country: '',
};

const Home = () => {
  const { CustomButton, Header, CustomSelect, CustomCard } = useLazyComponent();
  const [showResults, setShowResults] = useState(false);
  const [questionParams, setQuestionParams] = useState({
    ...DEFAULT_QUESTION_PARAMS,
  });
  const countryList = useCountryList();
  const levelsList = useLevelsList();
  const limitList = useLimitList();
  const { questions, loading, fetchError, setShowQuestions } = useQuestionsData({
    ...questionParams,
  });

  const {
    currentQuestionIndex,
    showQuestions,
    resetTrivia,
    getAnswer,
    getOptions,
    getResults,
    incrementCurrentQuestionIndex,
    decrementCurrentQuestionIndex,
    setAnswer,
  } = useQuestionTools();

  const handleSelectChange = (e, name) => {
    setQuestionParams({ ...questionParams, [name]: e.target.value });
  };

  const handleReset = () => {
    resetTrivia();
    setQuestionParams(DEFAULT_QUESTION_PARAMS);
    setShowResults(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex <= questions.length - 1) {
      incrementCurrentQuestionIndex();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex <= questions.length - 1) {
      decrementCurrentQuestionIndex();
    }
  };

  const handleResult = () => {
    const results = getResults();
    if (results?.missingAnswers === 0) {
      setShowResults(true);
    }
  };

  const disableResultsButton = () => {
    const { missingAnswers } = getResults();
    return missingAnswers > 0;
  };

  if (fetchError) return <div>Something went wrong...</div>;

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {!showQuestions && (
          <>
            <Header />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                width: '80%',
                gap: '5rem',
                margin: '5rem auto',
              }}
            >
              <CustomSelect onChange={handleSelectChange} items={countryList} id='country' title='Select a country' />
              <CustomSelect onChange={handleSelectChange} items={levelsList} id='levels' title='Select a level' />
              <CustomSelect onChange={handleSelectChange} items={limitList} id='limit' title='Number of questions' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CustomButton
                variant='contained'
                label={`Let's start`}
                loading={loading}
                onClick={() => {
                  setShowQuestions(true);
                }}
                disabled={!questionParams.country || !questionParams.levels || !questionParams.limit}
              />
            </Box>
          </>
        )}
      </Box>
      <Box>
        {showQuestions && !showResults && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <IconButton onClick={handlePreviousQuestion} disabled={currentQuestionIndex <= 0}>
                  <ArrowBackIos color='primary' fontSize='large' />
                </IconButton>
              </Box>
              <>
                <Box sx={{ width: '40rem', boxShadow: 2 }}>
                  {!loading && !!questions?.length && (
                    <CustomCard
                      triviaData={questions[currentQuestionIndex]}
                      answer={getAnswer(questions[currentQuestionIndex].id)}
                      options={getOptions(questions[currentQuestionIndex].id)}
                      setAnswer={setAnswer}
                    />
                  )}
                </Box>
              </>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <IconButton onClick={handleNextQuestion} disabled={currentQuestionIndex >= questions.length - 1}>
                  <ArrowForwardIos color='primary' fontSize='large' />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '4rem', gap: '1rem' }}>
              <CustomButton
                variant='contained'
                label='RESTART'
                loading={loading}
                onClick={handleReset}
                disabled={false}
              />
              <CustomButton
                variant='contained'
                label='RESULTS'
                loading={loading}
                onClick={handleResult}
                disabled={disableResultsButton()}
              />
            </Box>
          </>
        )}
      </Box>
      <>
        {showResults && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '4rem', flexDirection: 'column' }}>
            <Typography variant='h3'>WELL DONE!!! YOU HAVE COMPLETED THE TRIVIA</Typography>
            <Typography variant='h5' sx={{ mt: '4rem' }}>
              SCORE: {getResults()?.results}%
            </Typography>
            <Box sx={{ mt: '4rem' }}>
              <CustomButton
                variant='contained'
                label='RESTART'
                loading={loading}
                onClick={handleReset}
                disabled={false}
              />
            </Box>
          </Box>
        )}
      </>
    </>
  );
};

export default Home;
