import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactApp from './pages/ReactApp';
import FaqPage from './pages/FaqPage';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* the order of the routes matters */}
        <Route path='/faq' component={FaqPage} />
        {/* ReactApp has its own routing */}
        <Route path='/' component={ReactApp} />
      </Switch>
    </Router>
  );
};

export default App;
