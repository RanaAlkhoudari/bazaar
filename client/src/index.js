import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NotFoundPage from './components/NotFoundPage';

import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>,
      el,
    );
  }
  console.log('app loaded!!!');
});
