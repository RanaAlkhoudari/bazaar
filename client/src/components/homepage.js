import React from 'react';
import productsInfo from './mock-data';
import Products from './Products';

function Homepage() {
  productsInfo.sort(function sortProductsByDateDesc(a, b) {
    const dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });
  const sortedProductsByDate = productsInfo.slice(0, 10);
  return (
    <div>
      <h1>See What's New</h1>
      <Products products={sortedProductsByDate} />
    </div>
  );
}
export default Homepage;
