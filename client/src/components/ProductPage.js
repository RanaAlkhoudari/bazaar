import React from 'react';
import SimilarProducts from './SimilarProducts';
import ProductDetails from './product_details';

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
      setProduct(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ProductDetails product={product} />
      <h1>See Similar Products</h1>
      <SimilarProducts category={product.category} />
    </>
  );
}

export default ProductPage;
