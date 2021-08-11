import axios from 'axios';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';

const SeeWhatNew = () => {
  const [products, setProducts] = useState([]);
  products.sort(function sortProductsByDateDesc(a, b) {
    const dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  const sortedProductsByDate = products.slice(0, 9);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>See Whats New</h2>
      <ProductList products={sortedProductsByDate} />
    </div>
  );
};
export default SeeWhatNew;
