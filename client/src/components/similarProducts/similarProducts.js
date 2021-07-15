import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../productList/productList';

function SimilarProducts({ products }) {
  // const [similarProducts, setSimilarProducts] = useState([]);
  // console.log(product.categories);
  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  // async function fetchCategory() {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:3000/api/v1/products?category=${categories[0].name}`,
  //     );
  //     setSimilarProducts(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <Products products={similarProducts} />
    </>
  );
}

export default SimilarProducts;
