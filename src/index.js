import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
//import Contact from './Pages/Contact/Contact';
//import NotFound from './Pages/NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
