import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.css';

const Profile = ({ firstName, lastName, city, phoneNumber, email, image }) => {
  return (
    <div>
      <div className={styles.profile-header}>
        <h1>My profile data</h1>
        <Link to={`/${firstName}/edit`}>
          <button className={styles.profile-edit-btn}>edit profile</button>
        </Link>
      </div>
      <div className={styles.profile-info}>
        <img src={image} alt="profile pic" />
        <ul>
          <li>
            {firstName} {lastName}
          </li>
          <li>{city}</li>
          <li>{phoneNumber}</li>
          <li>{email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
