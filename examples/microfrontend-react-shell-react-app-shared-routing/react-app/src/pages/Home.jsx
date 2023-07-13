import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import { useQuestionsData, useCountryList, useLevelsList, useLimitList, useQuestionTools } from '../hooks/useTrivia';

import CustomSelect from '../components/Select';
import CustomButton from '../components/Button';
import CustomCard from '../components/Card';
import Header from '../components/Header';

export const DEFAULT_QUESTION_PARAMS = {
  levels: null,
  limit: null,
  country: '',
};

const Home = () => {
  const history = useHistory();
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
  } = useQuestionTools();

  const handleSelectChange = (e, name) => {
    setQuestionParams({ ...questionParams, [name]: e.target.value });
  };

  const handleReset = () => {
    resetTrivia();
    setQuestionParams(DEFAULT_QUESTION_PARAMS);
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

  const handleAbout = () => {
    history.push('/about');
  };

  const handleResult = () => {
    history.push('/results');
  };

  const handleShowFaqPage = () => {
    history.push('/faq');
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
        {showQuestions && (
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
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem', gap: '1rem' }}>
              <CustomButton
                variant='contained'
                label='About'
                loading={loading}
                onClick={handleAbout}
                disabled={false}
              />
              <CustomButton
                variant='contained'
                label='FAQ'
                loading={loading}
                onClick={handleShowFaqPage}
                disabled={false}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
