import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import productsInfo from '../../components/mock-data';
import Products from '../../components/productList/productList';

function Homepage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/products`);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  product.sort(function sortProductsByDateDesc(a, b) {
    const dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });
  const sortedProductsByDate = product.slice(0, 10);
  return (
    <div>
      <h1>See What's New</h1>
      <Products products={sortedProductsByDate} />
    </div>
  );
}
export default Homepage;
