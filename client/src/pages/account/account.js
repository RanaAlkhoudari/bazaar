import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Profile from '../../components/profile/Profile';
import { AuthContext } from '../../context/AuthContext';
import styles from './account.css';

const AccountPage = () => {
  const [address, setAddress] = useState({});

  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/addresses/${id}`);
      setAddress(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <hr />
      {user && address.city ? (
        <div>
          <h2>your tabs Component</h2>
          <hr />
          <h2>new ad component</h2>
          <hr />
          <Profile
            firstName={user.first_name}
            lastName={user.last_name}
            city={address.city}
            country={address.country}
            phoneNumber={user.phone}
            email={user.email}
            image={user.avatar}
          />
        </div>
      ) : (
        <h2 className={styles.no_page}>Nothing to display</h2>
      )}
    </div>
  );
};

export default AccountPage;
