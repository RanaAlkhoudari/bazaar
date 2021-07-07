import React from 'react';
import productsInfo from './mock-data';
import homepage from '../styles/homepage.css';
function Products() {
  productsInfo.sort(function sortedProductsByDateDesc(a, b) {
    const dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  console.log(ProductsInfo);
  const sortedProducts = productsInfo.slice(0, 10);
  return (
    <>
      <h1 className={homepage.title}>See What's New</h1>
      <div className={homepage.container}>
        {sortedProducts.map((product) => {
          return (
            <div className={homepage.item}>
              <div className={homepage.image}>
                <img src={product.image} alt=""></img>
              </div>
              <p>{product.title}</p>
              <p>{product.price} €</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;
