import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/header';
import NotFoundPage from './pages/notFoundPage';
import AddProduct from './components/addProduct/addProduct';
import './styles/variables.css';
import './styles/normalize.css';
import ProductDetailPage from './pages/productDetailPage/productDetailPage';
import Products from './pages/products/Products';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { AuthContextProvider } from './context/AuthContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <AuthContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/products/add" exact component={AddProduct} />
            <Route path="/:id" exact component={ProductDetailPage} />
            <Route path="/products/:keyword" exact component={Products} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </AuthContextProvider>,
      el,
    );
  }
  console.log('app loaded!!!');
});
