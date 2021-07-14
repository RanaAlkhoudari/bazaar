import React, { useEffect } from 'react';
import axios from 'axios';
import productsInfo from '../../components/mock-data';
import ProductList from '../productList/productList';

function SeeWhatNew() {
  productsInfo.sort(function sortProductsByDateDesc(a, b) {
    const dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });
  const sortedProductsByDate = productsInfo.slice(0, 10);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/users`);
      const productsArray = response.data.map((user) => user.products);
      const dateArray = response.data.map((user) => user.products[0].created_at.substring(0, 10));
      console.log(dateArray);
      dateArray.sort(function sortProductsByDateDesc(a, b) {
        const dateA = new Date(a),
          dateB = new Date(b);
        return dateB - dateA;
      });
      const sortedProductsByDatee = dateArray.slice(0, 10);
      console.log(sortedProductsByDatee);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>See Whats New</h1>
      <ProductList products={sortedProductsByDate} />
    </div>
  );
}
export default SeeWhatNew;
