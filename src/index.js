import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import GoToTop from './subcomponent/GoToTop';

ReactDOM.render(
  <Router>
    <GlobalStyle/>
    <GoToTop/>
    <App />
  </Router>,
  document.getElementById('root')
);

