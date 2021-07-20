import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductList from '../../components/productList/productList';
// import Filters from '../../components/filter/filters';
import Category from '../../components/Category/Category';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/products/searchedProduct/${keyword}`)
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
      });
  }, [keyword]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/products`)
      .then((response) => response.data)
      .then((data) => setAllProducts(data))
      .catch((error) => {
        console.log(error);
      });
    setProducts([]);
  }, [keyword]);

  const productsByCategory = allProducts.filter(
    (product) => product.categories[0].name === keyword,
  );

  return (
    <div className="container">
      {/* <div className="filter">
        <Filters />
      </div> */}
      <div className="category">
        <Category />
      </div>

      <div className="products">
        {products.length === 0 && productsByCategory.length === 0 && (
          <h1>This Category is empty chose another one please </h1>
        )}

        {productsByCategory.length !== 0 && <ProductList products={productsByCategory} />}

        {products.length !== 0 && <ProductList products={products} />}
      </div>
    </div>
  );
};

export default Products;
