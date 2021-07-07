import React from 'react';

function ProductDetails({ product }) {
  return (
    <div>
      <div key={product._id}>
        {product.image.map((img) => {
          <img src={img} alt={product.title} />;
        })}
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>€{product.price}</p>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default ProductDetails;
