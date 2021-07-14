import React from 'react';
import productList from '../productList/productList.css';

function ProductList(props) {
  const sortedProducts = props.products;
  return (
    <>
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

export default ProductList;
