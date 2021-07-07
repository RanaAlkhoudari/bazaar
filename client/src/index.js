import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Default from './components/Default';

import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');

  if (el) {
    render(
      <Router>
        <Header />
        <Switch>
          <Route component={Default} />
        </Switch>
      </Router>,
      el,
    );
  }

  console.log('app loaded!!!');
});
