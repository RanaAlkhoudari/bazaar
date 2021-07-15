import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../../components/SimilarProducts/similarProducts';
import ProductDetails from '../../components/productDetail/ProductDetails';
import Products from '../../components/productList/productList';

function ProductDetailsPage() {
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
      setProduct(response.data);
      const res = await axios.get(
        `http://localhost:3000/api/v1/products?category=${response.data.categories[0].name}`,
      );
      setSimilarProducts(res.data);
      // setSimilarProducts(response.data.categories[0].name);
      console.log(response.data.categories);
      console.log(response.data.categories[0].name);
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  // async function fetchCategory() {
  //   try {

  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <ProductDetails product={product} />
      <h1>See Similar Products</h1>
      {/* <SimilarProducts products={similarProducts} /> */}
      <Products products={similarProducts} />
    </>
  );
}

export default ProductDetailsPage;
