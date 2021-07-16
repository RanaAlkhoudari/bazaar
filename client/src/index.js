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
import CategoryProducts from './components/header/categories';
import SearchResult from './components/searchResult/searchResult';

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
          <Route path="/categories/:id" exact component={CategoryProducts} />
          <Route path="/searchResult/:q" exact component={SearchResult} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>,
      el,
    );
  }
  console.log('app loaded!!!');
});
