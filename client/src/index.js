import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import AddProduct from './components/AddProduct';

import MyAccountPage from './pages/MyAccountPage';
import './styles/variables.css';
import './styles/normalize.css';
import ProductDetailPage from './pages/ProductDetailPage';
import Products from './pages/ProductsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { AuthContextProvider } from './context/AuthContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/Checkout';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <AuthContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route path="/account" exact component={MyAccountPage} />
            <Route path="/products/add" exact component={AddProduct} />
            <Route path="/:id" exact component={ProductDetailPage} />
            <Route path="/products/:keyword" exact component={Products} />
            <Route path="/orders/checkout" exact component={Checkout} />
            {/* <Route exact path="/facebooklogin" component={SignInPage} /> */}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </AuthContextProvider>,

      el,
    );
  }
  console.log('app loaded!!!');
});
