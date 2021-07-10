import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Product from './components/Product';
import Filters from '../components/Filters';
import Category from './components/Category';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/` + categoryName)
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div className="container">
      <div className="Header">
        <Header />
      </div>
      <div className="Filters">
        <Filters />
      </div>
      <div className="Categories">
        <Category />
      </div>
      <div className="Products product-items">
        {' '}
        {categoryName.length === 0 ? (
          <div className="no_category">Please Select the category</div>
        ) : (
          products.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`${product.title}/details`}>
                  <Product
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
