import React from 'react';
import productDetail from '../productDetail/productDetail.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function ProductDetail({ product }) {
  return (
    <div className={productDetail.container}>
      <div key={product._id}>
        <img className={productDetail.img} src={product.images} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>€{product.price}</p>
        <button className={productDetail.but}>Buy</button>
        {/* <FontAwesomeIcon icon={farStar} /> */}
      </div>
    </div>
  );
}

export default ProductDetail;
