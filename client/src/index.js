import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');

  if (el) {
    render(
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} />
          <Route path="/productList" exact component={ProductList} /> */}
        </Switch>
      </Router>,
      el,
    );
  }

  console.log('app loaded!!!');
});
