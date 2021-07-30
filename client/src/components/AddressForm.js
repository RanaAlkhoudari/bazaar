import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import React, { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';

const AddressForm = ({ getNewAddress }) => {
  const { user } = useContext(AuthContext);

  const cityRef = useRef();
  const countryRef = useRef();
  const lastNameRef = useRef();
  const postCodeRef = useRef();
  const extensionRef = useRef();
  const firstNameRef = useRef();
  const streetNameRef = useRef();
  const buildingNumberRef = useRef();

  const handleClick = async (e) => {
    e.preventDefault();

    const newAddress = {
      user: user._id,
      city: cityRef.current.value || null,
      last_name: lastNameRef.current.value,
      extension: extensionRef.current.value,
      first_name: firstNameRef.current.value,
      country: countryRef.current.value || null,
      post_code: postCodeRef.current.value || null,
      street_name: streetNameRef.current.value || null,
      building_number: buildingNumberRef.current.value || null,
    };

    // TODO: change (input) to (Form.Control) to be able to set (required) attribute and remove that (isFilled())
    const isFilled = () => {
      for (const key in newAddress) if (newAddress[key] === null) return false;
      return true;
    };

    if (isFilled()) {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/addresses/create`,
        newAddress,
      );

      // set it on the parent component (addressesDropdown) if the user filled all the required fields
      getNewAddress(response.data.address);
    }
  };

  return (
    <Card style={cardStyles}>
      <Card.Header>Shipping Address</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <input
              type="text"
              name="first_name"
              ref={firstNameRef}
              style={inputStyles}
              placeholder="First Name"
            />
          </Col>

          <Col md={6}>
            <input
              type="text"
              name="last_name"
              ref={lastNameRef}
              style={inputStyles}
              placeholder="Last Name"
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <input
              type="text"
              name="street_name"
              style={inputStyles}
              ref={streetNameRef}
              placeholder="Street Name"
            />
          </Col>

          <Col md={4}>
            <input
              type="text"
              style={inputStyles}
              name="building_number"
              ref={buildingNumberRef}
              placeholder="Building Number"
            />
          </Col>

          <Col md={2}>
            <input
              type="text"
              name="extension"
              ref={extensionRef}
              style={inputStyles}
              placeholder="Extension (Optional)"
            />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <input
              type="text"
              name="post_code"
              ref={postCodeRef}
              style={inputStyles}
              placeholder="Post Code"
            />
          </Col>

          <Col md={4}>
            <input type="text" name="city" ref={cityRef} placeholder="City" style={inputStyles} />
          </Col>

          <Col md={4}>
            <input
              type="text"
              name="country"
              ref={countryRef}
              style={inputStyles}
              placeholder="Country"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <input
              value="Add"
              type="submit"
              name="submit"
              style={btnStyles}
              onClick={handleClick}
              className="btn btn-primary"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const cardStyles = {
  marginBottom: '10px',
  borderColor: 'var(--color-main)',
};

const inputStyles = {
  width: '100%',
  marginBottom: '10px',
};

const btnStyles = {
  background: 'var(--color-main)',
};

export default AddressForm;
