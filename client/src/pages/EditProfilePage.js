import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import EditProfile from '../components/EditProfile';
import { AuthContext } from '../context/AuthContext';
import { Container, Alert } from 'react-bootstrap';

const EditProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userFromDB, setUserFromDB] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [user._id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${user._id}`);

      setUserFromDB(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <Container>
          <h1 className="text-center p-3">Edit My Profile Data</h1>

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <EditProfile user={userFromDB} />
            </div>
          )}
        </Container>
      ) : (
        <Container>
          <Alert variant="danger">You are logged out. Please log in.</Alert>
        </Container>
      )}
    </>
  );
};

export default EditProfilePage;
