import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../../components/SimilarProducts/similarProducts';
import ProductDetail from '../../components/productDetail/ProductDetail';

function ProductDetailPage() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProductDetail product={product} />
      <h1 style={{ textAlign: 'center' }}>See Similar Products</h1>
      {/* <SimilarProducts products={product.categories} /> */}
    </>
  );
}

export default ProductDetailPage;
