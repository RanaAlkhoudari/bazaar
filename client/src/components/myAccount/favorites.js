import React from 'react';
import ProductList from '../ProductList';
import favoritesStyle from './favorites.css';

const Favorites = () => {
  const favoriteProducts = [
    {
      _id: '60ec9b000eb2b755602b5071',
      title: 'Vauxhall Corsa',
      description:
        'Vauxhall Corsa1.4L petrol.12 months MOT.2 keys.engine and gearbox in great condition.central locking.electric windows.power steering.CD player.',
      price: '10000.00',
      images: 'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
      condition: 'new',
      categories: ['60ed787b32db8b0c87019bba'],
      user: '60ec89b6c11d83d518e123c1',
      videos: ['aaa.avi', 'ggg.avi'],
    },
    {
      _id: '60ec9b000eb2b755602b5072',
      title: 'Ford Ka',
      description:
        'I have for sale my Ford Ka 2 edge, 2014, Mot May 2022,44k, 2 keys V5. I’ve Pretty much parked this car up for the last 18months',
      price: '6000.00',
      condition: 'fairly used',
      images: 'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
      categories: ['60ed787b32db8b0c87019bba'],
      user: '60ec89b6c11d83d518e123c2',
      videos: ['videos1.avi'],
    },
    {
      _id: '60ec9b000eb2b755602b5073',
      title: 'Dune Heeled Sandals',
      description: 'A classic pair of Dune heels. Comfortable and easy to wear, in size 38 EU',
      price: '38.00',
      condition: 'fairly used',
      images: 'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
      categories: ['60ed787b32db8b0c87019bb6'],
      user: '60ec89b6c11d83d518e123c2',
      videos: ['videos1.avi', 'videos2.avi', 'videos3.avi', 'videos4.avi'],
    },
  ];

  return (
    <div className={favoritesStyle.cont}>
      <h2>Favorites</h2>
      <ProductList products={favoriteProducts} />
    </div>
  );
};

export default Favorites;
