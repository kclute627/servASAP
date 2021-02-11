import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify' 
import config from './aws-exports'
import { alpha } from '@material-ui/core/styles'
import {Helmet} from "react-helmet";

Amplify.configure(config)
require('dotenv').config()


ReactDOM.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
