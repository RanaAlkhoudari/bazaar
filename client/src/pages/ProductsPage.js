import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

import axios from 'axios';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Category from '../components/Category';

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
    (product) => product.categories.length > 0 && product.categories[0].name === keyword,
  );

  return (
    <div>
      <Filters />
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <div>
              <Category />
            </div>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div>
              {products.length === 0 && productsByCategory.length === 0 && (
                <ProductList products={allProducts} />
              )}
              {/* {products.length === 0 && productsByCategory.length === 0 && (
                <h1
                  style={{
                    marginTop: '100px',
                  }}
                >
                  This category is empty, choose another one please{' '}
                </h1>
              )} */}

              {productsByCategory.length !== 0 && <ProductList products={productsByCategory} />}
              {products.length !== 0 && <ProductList products={products} />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
