import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactApp from './pages/ReactApp';
import VueApp from './pages/VueApp';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/react' component={ReactApp} />
        <Route path='/vue' component={VueApp} />
      </Switch>
    </Router>
  );
};

export default App;
