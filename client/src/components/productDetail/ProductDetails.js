import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function ProductDetails({ product }) {
  console.log(product);
  return (
    <div>
      <div key={product._id}>
        {/* {product.image.map((img) => {
          <img src={img} alt={product.title} />;
        })} */}
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>€{product.price}</p>
        <button>Buy</button>
        {/* <i className="fas fa-star"></i> */}
        <FontAwesomeIcon icon={farStar} />
      </div>
    </div>
  );
}

export default ProductDetails;
