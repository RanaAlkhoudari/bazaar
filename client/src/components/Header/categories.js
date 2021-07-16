import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../productList/productList';

const CategoryProducts = (props) => {
  const [products, setProducts] = useState([]);

  const categories = products.reduce((allProducts, current) => {
    return allProducts.includes(current.category)
      ? allProducts
      : allProducts.concat([current.category]);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {categories.map((category) => {
        // filter out the products of the current category
        products.filter((prod) => prod.category === category);
        return <ProductList products={products} key={category} />;
      })}
    </div>
  );
};

export default CategoryProducts;
