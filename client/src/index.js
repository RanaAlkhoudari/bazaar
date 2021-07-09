import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <Router>
        <Homepage />
      </Router>,
      el,
    );
  }
  console.log('app loaded!!!');
});
