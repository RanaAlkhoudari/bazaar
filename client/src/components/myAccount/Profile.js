import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.css';

const Profile = ({ firstName, lastName, city, country, phoneNumber, email, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>My profile data</h4>
        <Link to={`/${firstName}/edit`}>
          <button className={styles.btn}>edit profile</button>
        </Link>
      </div>
      <div className={styles.info}>
        <img className={styles.img} src={image} alt="profile pic" />
        <ul className={styles.list}>
          <li>
            {' '}
            Name : {firstName} {lastName}
          </li>
          <li>
            Location : {city} - {country}
          </li>
          <li> Phone Number : {phoneNumber}</li>
          <li>Email-address : {email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
