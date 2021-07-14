import React, { useState, useEffect } from 'react';
import ProductList from '../productList/productList';
import axios from 'axios';

function SeeWhatNew() {
  const [products, setProducts] = useState([]);
  products.sort(function sortProductsByDateDesc(a, b) {
    const dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  const sortedProductsByDate = products.slice(0, 10);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(products);
  return (
    <div>
      <h1>See Whats New</h1>
      <ProductList products={sortedProductsByDate} />
    </div>
  );
}
export default SeeWhatNew;
