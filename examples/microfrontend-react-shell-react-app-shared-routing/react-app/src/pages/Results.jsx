import React from 'react';
import { Box, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useQuestionTools } from '../hooks/useTrivia';
import CustomButton from '../components/Button';

const Results = () => {
  const history = useHistory();
  const { getResults, resetTrivia } = useQuestionTools();
  const { missingAnswers, results } = getResults();

  const handleRestart = () => {
    resetTrivia();
    history.push('/');
  };

  const handlePlay = () => {
    history.push('/');
  };
  return (
    <>
      {missingAnswers === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '4rem', mt: '2rem' }}>
          <Typography variant='h1' component='h4' textAlign='center'>
            Results
          </Typography>
          <Typography variant='h4' component='h4' textAlign='center'>
            Your result is: {results}%
          </Typography>
          <Typography variant='h4' component='h4' textAlign='center'>
            Well done!! you can keep your left arm
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton variant='contained' label='RESTART' onClick={handleRestart} disabled={false} loading={null} />
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '4rem', mt: '2rem' }}>
          <Typography variant='h4' component='h4' textAlign='center'>
            You can't run away! You must play
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton variant='contained' label='LET`S PLAY' onClick={handlePlay} disabled={false} loading={null} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Results;
