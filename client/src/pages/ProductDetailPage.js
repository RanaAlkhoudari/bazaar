import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../components/SimilarProducts';
import ProductDetail from '../components/ProductDetail';
import NotFoundPage from './NotFoundPage';

function ProductDetailPage() {
  const [product, setProduct] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

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
      {product ? (
        <>
          <ProductDetail product={product} />
          <h2 style={{ textAlign: 'center', marginTop: '70px' }}>See Similar Products</h2>
          {product.categories && <SimilarProducts product={product} />}
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}

export default ProductDetailPage;
