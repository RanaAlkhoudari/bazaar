import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function ProductDetail({ product }) {
  return (
    <div>
      <div key={product._id}>
        <img src={product.images} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>€{product.price}</p>
        <button>Buy</button>
        <FontAwesomeIcon icon={farStar} />
      </div>
    </div>
  );
}

export default ProductDetail;
