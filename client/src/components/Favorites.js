<<<<<<< HEAD:client/src/components/myAccount/favorites.js
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
=======
import React from 'react';
import ProductList from './ProductList';
>>>>>>> dev:client/src/components/Favorites.js

const Favorites = () => {
  const { currentUser } = useContext(AuthContext);

  return (
<<<<<<< HEAD:client/src/components/myAccount/favorites.js
    <div className="d-flex flex-wrap justify-content-center">
      {currentUser.favorites.map((favorite) => (
        <FaveList key={favorite} favorite={favorite} />
      ))}
    </div>
  );
};

const FaveList = (favorite) => {
  const [fave, setFave] = useState();
  const { user, currentUser } = useContext(AuthContext);
  const { deleteFavorite } = useContext(AuthContext);

  useEffect(() => {
    fetchFave(favorite.favorite);
  }, [favorite]);

  async function fetchFave(favorite) {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${favorite}`);
      setFave(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {fave && (
        <Card className="m-3" style={{ width: '15rem' }} key={fave._id}>
          <Card.Body style={{ color: 'teal' }}>
            <Link to={`/${fave._id}`} style={{ textDecoration: 'none' }}>
              <Card.Img
                variant="top"
                src={fave.images}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <Card.Title>{fave.title}</Card.Title>
              <Card.Text>{fave.price} €</Card.Text>
            </Link>
            <Button
              type="submit"
              variant="danger"
              onClick={() => {
                deleteFavorite(currentUser, fave._id);
              }}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      )}
=======
    <div style={{ paddingBottom: '1em', paddingTop: '1em' }}>
      <ProductList products={favoriteProducts} />
>>>>>>> dev:client/src/components/Favorites.js
    </div>
  );
};

export default Favorites;
