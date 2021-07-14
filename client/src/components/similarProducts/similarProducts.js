import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../productList/productList';

function SimilarProducts({ category }) {
  const [similarProducts, setSimilarProducts] = useState([]);

  // const category = products.categories[0].name;
  console.log(category);
  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/products?category=${category[0].name}`,
      );
      setSimilarProducts(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {similarProducts.map((similarProduct) => {
        return (
          <>
            <h1>ffff</h1>
            <Products product={similarProduct} />
          </>
        );
      })}
    </div>
  );
}

export default SimilarProducts;
