import CustomCard from '.';

const meta = {
  component: CustomCard,
  tags: ['autodocs'],
};

export default meta;

export const CorrectAnswer = {
  args: {
    triviaData: {
      id: '1',
      correctAnswer: 'The Legend of Zelda: Ocarina of Time',
      question: 'What is the best selling video game of all time?',
    },
    answer: 'The Legend of Zelda: Ocarina of Time',
    options: ['The Legend of Zelda: Ocarina of Time', 'Minecraft', 'Grand Theft Auto V'],
    setAnswer: () => {},
  },
};

export const WrongAnswer = {
  args: {
    triviaData: {
      id: '1',
      correctAnswer: 'The Legend of Zelda: Ocarina of Time',
      question: 'What is the best selling video game of all time?',
    },
    answer: 'Grand Theft Auto V',
    options: ['The Legend of Zelda: Ocarina of Time', 'Minecraft', 'Grand Theft Auto V'],
    setAnswer: () => {},
  },
};
