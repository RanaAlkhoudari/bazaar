import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './Profile.css';

const Profile = ({
  firstName,
  lastName,
  city,
  country,
  phoneNumber,
  email,
  image,
  street_name,
  building_number,
  extension,
  post_code,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>My profile data</h4>
        <Link to={`/account/edit`}>
          <Button className="w-30" style={{ background: 'var(--color-main)' }}>
            change my profile data
          </Button>
        </Link>
      </div>
      <div className={styles.info}>
        <img className={styles.img} src={image} alt="profile pic" />
        <ul className={styles.list}>
          <li>
            Name : {firstName} {lastName}
          </li>
          <li>
            Location : {city} - {country}
          </li>
          <li>
            Address : {street_name} {building_number} {extension}
          </li>
          <li>Post Code : {post_code}</li>
          <li> Phone Number : {phoneNumber}</li>
          <li>Email: {email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
