import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../../components/SimilarProducts/similarProducts';
import ProductDetails from '../../components/productDetail/ProductDetails';

function ProductDetailsPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProductDetails product={product} />
      <h1>See Similar Products</h1>
      <SimilarProducts category={product.categories} />
    </>
  );
}

export default ProductDetailsPage;
