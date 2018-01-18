import React from 'react';
import {Router, Route } from 'react-router';

import App from './App';
import Contact from './Pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => {
  <Router {...props}>
    <Route path='/' component={App} >
      <Route path='/Contact' component={Contact} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
};

export default Routes;
