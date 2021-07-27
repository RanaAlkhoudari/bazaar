import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Profile = ({
  firstName,
  lastName,
  city,
  country,
  phoneNumber,
  email,
  image,
  streetName,
  buildingNumber,
  extension,
  postcode,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h4>My profile data</h4>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <img
            style={{
              width: '100%',
              borderTopLeftRadius: '50px',
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '50px',
              borderBottomLeftRadius: '5px',
            }}
            src={image}
            alt="profile pic"
          />
        </Col>
        <Col>
          <ul>
            <li>
              Name : {firstName} {lastName}
            </li>
            <li>
              Location : {city} - {country}
            </li>
            <li>
              Address : {streetName} {buildingNumber} {extension}
            </li>
            <li>Postal code : {postcode}</li>
            <li> Phone number : {phoneNumber}</li>
            <li>Email: {email}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
