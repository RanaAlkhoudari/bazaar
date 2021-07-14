import React from 'react';
import { Link } from 'react-router-dom';
import productList from './productList.css';

function Products({ products }) {
  // const sortedProducts = props.products;
  return (
    <>
      <div className={productList.container}>
        {products.map((product) => {
          return (
            <div className={productList.item} key={product.id}>
              <Link to={`/${product._id}`}>
                <div className={productList.image}>
                  <img src={product.image} alt=""></img>
                </div>
                <p>{product.title}</p>
                <p>{product.price} €</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
