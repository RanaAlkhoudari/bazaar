import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import productList from '../searchResult/productList.css';

const SearchProducts = (props) => {
  const [products, setProducts] = useState([]);
  const resultProducts = products.filter((product) => {
    if (product.title.includes(props.match.params.q)) {
      return product;
    }
  }, []);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {resultProducts.map((product) => {
        return (
          <div className={productList.item} key={product._id}>
            <Link to={`/${product._id}`}>
              <div className={productList.image}>
                <img src={product.images} alt="React Image"></img>
              </div>
            </Link>
            <p>{product.title}</p>
            <p>{product.price} €</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchProducts;
