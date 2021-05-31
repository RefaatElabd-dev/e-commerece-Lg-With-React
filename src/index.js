import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import App from './component/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './component/navBar-component/Nav';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 
    <App />


   
  
  ,
  document.getElementById('root')
);
