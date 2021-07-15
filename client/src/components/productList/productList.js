import React from 'react';
import { Link } from 'react-router-dom';
import productList from '../productList/productList.css';

function ProductList(props) {
  const sortedProducts = props.products;
  return (
    <>
      <div className={productList.container}>
        {sortedProducts.map((product) => {
          return (
            <div className={productList.item} key={product._id}>
              <div className={productList.image}>
                {/* <Link to="/detailPage"> */}
                <img src={product.images} alt="React Image"></img>
                {/* </Link> */}
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
