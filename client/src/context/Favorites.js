import React, { useEffect, useState } from 'react';
import { AddFavourite, DeleteFavourite } from '../components/AddRemoveFavs';
import ProductList from '../components/ProductList';

const Favs = () => {
  const [favourites, setFavourites] = useState([]);
  const [products, setProducts] = useState([]);

  const addFavouriteProduct = (product) => {
    const newFavouriteList = [...favourites, product];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteProduct = (product) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.id !== product.id);

    setFavourites(newFavouriteList);
  };

  return (
    <ProductList
      products={favourites}
      handleFavouritesClick={removeFavouriteProduct}
      favouriteComponent={RemoveFavourites}
    />
  );
};

export default Favs;
