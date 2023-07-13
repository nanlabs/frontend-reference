import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

import Trivia from './pages/Trivia';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Trivia />
    </ThemeProvider>
  );
};

export default App;
