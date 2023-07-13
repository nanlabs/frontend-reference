import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

import Home from './pages/Home';

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

const App = ({ store }) => {
  // "setResults" comes from container & updates the parent store
  const { setResults } = store;
  return (
    <ThemeProvider theme={theme}>
      <Home setResults={setResults} />
    </ThemeProvider>
  );
};

export default App;
