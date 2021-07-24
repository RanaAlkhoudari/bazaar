import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../../components/SimilarProducts/similarProducts';
import ProductDetail from '../../components/productDetail/ProductDetail';
import NotFoundPage from '../notFoundPage';
import UserDetail from '../../components/productDetail/userDetail';

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
          <Container>
            <Row>
              <Col xs={12} md={8} lg={8}>
                <ProductDetail product={product} />
              </Col>
              <Col xs={12} md={4} lg={4}>
                <UserDetail product={product} />
              </Col>
            </Row>
          </Container>

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
