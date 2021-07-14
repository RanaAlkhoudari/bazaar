import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
<<<<<<< HEAD
import NotFoundPage from './pages/notFoundPage';
import AddProduct from './components/AddProduct/AddProduct';
=======
import NotFoundPage from './components/NotFoundPage';
import AddProduct from './components/addProduct/addProduct';
>>>>>>> cea6c131d8857834fff1cd4ee1c96a232e92f5a6

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
          <Route path="/products/add" exact component={AddProduct} />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>,
      el,
    );
  }
  console.log('app loaded!!!');
});
