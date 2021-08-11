import axios from 'axios';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import UserDetail from '../components/UserDetail';
import SeeWhatNew from '../components/SeeWhatNew';
import { Container, Row, Col } from 'react-bootstrap';
import ProductDetail from '../components/ProductDetail';
// import SimilarProducts from '../components/SimilarProducts';

const ProductDetailPage = () => {
  const { id } = useParams();

  const [error, setError] = useState(false);
  const [product, setProduct] = useState('');

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);

      setProduct(response.data);
    } catch (error) {
      setError(true);
      console.log('error:', error);
    }
  }
  if (product)
    return (
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
        <br />

        {/*<h2 style={{ textAlign: 'center', marginTop: '70px' }}>See Similar Products</h2>*/}
        {/*{product.categories && <SimilarProducts product={product} />}*/}
        {<SeeWhatNew />}
      </>
    );
  if (error) return <NotFoundPage />;
  return <Loading />;
};

export default ProductDetailPage;
