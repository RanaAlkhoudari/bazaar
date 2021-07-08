import React from 'react';
import productList from '../styles/product_list.css';
function Products(props) {
  const sortedProducts = props.products;
  return (
    <>
      <h1 className={productList.title}>See What's New</h1>
      <div className={productList.container}>
        {sortedProducts.map((product) => {
          return (
            <div className={productList.item} key={product.id}>
              <div className={productList.image}>
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
