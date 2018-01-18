import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div>
              <br/>
              <Link className="App-title" to='/'>Home</Link>
              <Link className="App-title" to='/Contact'>Contact</Link>
              <Link className="App-title" to='/sdfsdfsd'>Something Else </Link>
            </div>
        </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
