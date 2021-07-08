import React from 'react';
import productsInfo from './mock-data';
import Products from './Products';

function Category() {
  const category = 'bicycles';
  return (
    <div>
      <h1>See Category</h1>
      <Products
        products={productsInfo.filter(
          (product) => product.category === category
        )}
      />
    </div>
  );
}
export default Category;
