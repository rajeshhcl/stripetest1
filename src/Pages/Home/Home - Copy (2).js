import React, { Component } from 'react';
import './Home.css';

import CardProductList from './CardProductList'

import {lime100,green500,blue500,brown500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const App = () => (
  <MuiThemeProvider>
    <CardProductList />
  </MuiThemeProvider>
);

export default App;