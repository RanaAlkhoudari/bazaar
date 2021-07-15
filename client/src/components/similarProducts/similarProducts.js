import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../productList/productList';

function SimilarProducts({ products }) {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/products?category=Electronics`);
      setSimilarProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProductList products={similarProducts} />
    </>
  );
}

export default SimilarProducts;
