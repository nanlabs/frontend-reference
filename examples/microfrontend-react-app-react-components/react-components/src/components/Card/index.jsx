import React from 'react';
import { Card, CardContent, CardActions, List, Typography, Zoom } from '@mui/material';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';
import Item from '../Item';

const CustomCard = ({ triviaData, answer, options, setAnswer }) => {
  const { question, correctAnswer, id } = triviaData;
  const isCorrect = correctAnswer === answer;
  return (
    <Card sx={{ padding: '2rem', boxShadow: 1, borderRadius: '4px' }}>
      <CardContent>
        <Typography component={'h3'} variant={'h5'} fontWeight={'bolder'} textAlign={'center'} margin={2}>
          {question.text}
        </Typography>
        <List>
          {!!options?.length &&
            options.map((label, i) => (
              <Item
                key={i}
                label={label}
                index={id}
                disabled={!!answer}
                selected={answer === label}
                correctAnswer={correctAnswer}
                setAnswer={setAnswer}
              />
            ))}
        </List>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        {answer ? (
          isCorrect ? (
            <Zoom in={isCorrect}>
              <CheckCircleOutline color='success' fontSize='large' />
            </Zoom>
          ) : (
            <Zoom in={!isCorrect}>
              <HighlightOff color='error' fontSize='large' />
            </Zoom>
          )
        ) : null}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
