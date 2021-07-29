import axios from 'axios';
import { Card, Dropdown } from 'react-bootstrap';
import AddressForm from '../components/AddressForm';
import { AuthContext } from '../context/AuthContext';
import React, { useState, useContext, useEffect } from 'react';

const AddressesDropdown = ({ getShippingAddress }) => {
  const { user } = useContext(AuthContext);

  const [addresses, setAddresses] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);

  useEffect(() => fetchAddresses(), []);

  const fetchAddresses = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/addresses/all/${user._id}`);
    setAddresses(response.data.addresses);
  };

  const handleClick = (e) => {
    const selectedAddress = addresses.find((address) => address._id === e.target.id);
    setShippingAddress(selectedAddress);
  };

  getShippingAddress(shippingAddress);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{ marginBlock: '1rem', background: 'var(--color-main)' }}
        >
          Choose an address
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={handleClick}>
          {addresses &&
            addresses.map((address) => (
              <Dropdown.Item id={address._id} key={address._id}>
                {`${address.street_name} ${address.building_number} ${address.extension},
                  ${address.post_code} ${address.city} - ${address.country}`}
              </Dropdown.Item>
            ))}

          <Dropdown.Item>New shipping address</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {shippingAddress ? (
        <Card style={cardStyles}>
          <Card.Header className="card-header">Shipping Address</Card.Header>

          <Card.Body>
            <Card.Text>{`${shippingAddress.first_name || user.first_name} 
                ${shippingAddress.last_name || user.last_name}`}</Card.Text>
            <Card.Text>{`${shippingAddress.street_name} ${shippingAddress.building_number},`}</Card.Text>
            <Card.Text>{`${shippingAddress.post_code} ${shippingAddress.city} - ${shippingAddress.country}`}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        shippingAddress !== null && <AddressForm />
      )}
    </div>
  );
};

const cardStyles = {
  borderColor: 'var(--color-main)',
  marginBottom: '10px',
};

export default AddressesDropdown;
