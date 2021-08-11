import './styles/variables.css';
import './styles/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import InfoPage from './pages/InfoPage';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Products from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProduct from './components/AddProduct';
import MyAccountPage from './pages/MyAccountPage';
import ContactUsPage from './pages/ContactUsPage';
import NewPasswordPage from './pages/NewPasswordPage';
import EditProfilePage from './pages/EditProfilePage';
import UpdateProduct from './components/UpdateProduct';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/info" component={InfoPage} />
            <Route exact path="/ContactUsPage" component={ContactUsPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/reset-password" component={ResetPasswordPage} />
            <Route exact path="/reset-password/:id/:token" component={NewPasswordPage} />
            <Route path="/account" exact component={MyAccountPage} />
            <Route path="/edit-profile" exact component={EditProfilePage} />
            <Route path="/products/add" exact component={AddProduct} />
            <Route path="/:id" exact component={ProductDetailPage} />
            <Route path="/products/:keyword" exact component={Products} />
            <Route path="/orders/checkout" exact component={Checkout} />
            <Route path="/update/:id" exact component={UpdateProduct} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
