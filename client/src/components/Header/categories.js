import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../productList/productList';

const CategoryProducts = (props) => {
  const [products, setProducts] = useState([]);
  // const category = product.categories[0].name;
  console.log(props);
  console.log(products);

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
  console.log(products);

  const productsFromCategory = products.filter((product) => product.categories[0]._id === props);

  return (
    <div>
      <ProductList products={productsFromCategory} />
    </div>
  );
};

export default CategoryProducts;
