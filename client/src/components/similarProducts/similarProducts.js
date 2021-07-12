import React, { useState } from 'react';
import ProductList from './ProductList';

function SimilarProducts({ category }) {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/products/?category=${category}`);
      setSimilarProducts(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {similarProducts.map((similarProduct) => {
        return (
          <>
            <ProductList product={similarProduct} />
          </>
        );
      })}
    </div>
  );
}

export default SimilarProducts;
