import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useListContext } from '../../context/FaveContext';

const Favorites = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {user.favorites.map((favorite) => (
        <FaveList key={favorite} favorite={favorite} />
      ))}
    </div>
  );
};

const FaveList = (props) => {
  const [fave, setFave] = useState();
  const { user } = useContext(AuthContext);
  const { deleteFave } = useContext(AuthContext);

  useEffect(() => {
    fetchFave(props.favorite);
  }, []);

  async function fetchFave(favorite) {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products/${favorite}`);
      setFave(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // deletes favorite from the database
  async function deleteFavorite(user, _id) {
    const newList = user.favorites.filter((item) => item !== _id);
    setFave(newList);
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, {
        favorites: fave,
      });
      deleteFave(user, _id);
    } catch (error) {
      console.log(error);
    }
    return;
  }

  return (
    <div>
      {fave && (
        <Card className="m-3" style={{ width: '15rem' }} key={fave._id}>
          {/* <Link to={`/${fave._id}`} style={{ textDecoration: 'none' }}> */}
          <Card.Img
            variant="top"
            src={fave.images}
            style={{
              height: '200px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Card.Body style={{ color: 'teal' }}>
            <Card.Title>{fave.title}</Card.Title>
            <Card.Text>{fave.price} €</Card.Text>
            <Button
              type="submit"
              variant="danger"
              onClick={() => {
                deleteFavorite(user, fave._id);
              }}
            >
              Delete
            </Button>
          </Card.Body>
          {/* </Link> */}
        </Card>
      )}
    </div>
  );
};

export default Favorites;
