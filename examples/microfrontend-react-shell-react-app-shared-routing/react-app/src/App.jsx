import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Results from './pages/Results';

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

const App = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/results' component={Results} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
