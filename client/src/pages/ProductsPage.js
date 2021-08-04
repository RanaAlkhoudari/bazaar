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
  async function handlePriceRange(lowPrice, highPrice) {
    try {
      const priceRange = productsByCategory.filter(
        (item) => item.price >= Number(lowPrice) && item.price <= Number(highPrice),
      );
      setAllProducts(priceRange);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleState(state) {
    try {
      const stateList = productsByCategory.filter((item) => item.condition === state);
      setAllProducts(stateList);
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  }

  async function oldNewProducts() {
    try {
      const sortedOldNew = productsByCategory.sort(function sortProductsByDateDesc(a, b) {
        const dateA = new Date(a.createdAt),
          dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
      setAllProducts(sortedOldNew);
    } catch (error) {
      console.log(error);
    }
  }

  async function newOldProducts() {
    try {
      const sortedNewOld = productsByCategory.sort(function sortProductsByDateDesc(a, b) {
        const dateA = new Date(a.createdAt),
          dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      setAllProducts(sortedNewOld);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLocation = (location) => {
    try {
      const sortedLocation = productsByCategory.filter(
        (item) => item.city.toLowerCase() === location.toLowerCase(),
      );
      setAllProducts(sortedLocation);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* {productsByCategory.length !== 0 && ( */}
      <Filters
        products={productsByCategory}
        handlePriceRange={handlePriceRange}
        handleState={handleState}
        oldNewProducts={oldNewProducts}
        newOldProducts={newOldProducts}
        handleLocation={handleLocation}
      />
      {/* // )} */}
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
                <h1
                  style={{
                    marginTop: '100px',
                  }}
                >
                  This category is empty, choose another one please{' '}
                </h1>
              )}
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
