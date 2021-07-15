import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Header from './components/Header/Header';
import NotFoundPage from './pages/notFoundPage';
import AddProduct from './components/addProduct/addProduct';
import './styles/variables.css';
import './styles/normalize.css';
import ProductDetailPage from './pages/productDetailPage/productDetailPage';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products/add" exact component={AddProduct} />
          <Route path="/:id" exact component={ProductDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>,
      el,
    );
  }
  console.log('app loaded!!!');
});
