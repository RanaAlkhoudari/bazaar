import React, { useState } from 'react';
import ProductList from './ProductList';

function SimilarCategory({ category }) {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    await axios.get(`http://localhost:3000/api/v1/products/?category=${category}`).then((res) => {
      setSimilarProducts(res).catch((error) => {
        console.log(error);
      });
    });
  }

  return (
    <div>
      {similarProducts.map((similarProduct) => {
        return (
          <>
            <ProductList products={similarProduct} />
          </>
        );
      })}
    </div>
  );
}

export default SimilarCategory;
