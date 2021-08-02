import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditProfile = ({ user }) => {
  const [userData, setUserData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    avatar: user.avatar,
    addresses: user.addresses,
  });
  const [addressesData, setAddressesData] = useState(user.addresses);
  console.log('addressesData: ', addressesData);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, userData);
      alert('Successfully updated!');
    } catch (err) {
      console.log(err);
    }
  };

  let addresses = [];
  if (addressesData) {
    addresses = addressesData.map((address, index) => {
      return (
        <Card style={{ borderColor: 'var(--color-main)' }} key={address._id} className="m-3 p-3">
          <h4>Address {index + 1}</h4>
          <Form.Group>
            <Form.Label>Recipient (if the name is different from yours)</Form.Label>
            <br />
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              value={address.first_name}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.first_name = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              value={address.last_name}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.last_name = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country:</Form.Label>
            <Form.Control
              type="text"
              value={address.country}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.country = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City:</Form.Label>
            <Form.Control
              type="text"
              value={address.city}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.city = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Street:</Form.Label>
            <Form.Control
              type="text"
              value={address.street_name}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.street_name = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Building Number:</Form.Label>
            <Form.Control
              type="text"
              value={address.building_number}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.building_number = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Extension:</Form.Label>
            <Form.Control
              type="text"
              value={address.extension}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.extension = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Postal code:</Form.Label>
            <Form.Control
              type="text"
              value={address.post_code}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.post_code = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              type="text"
              value={address.comment}
              onChange={(e) => {
                setAddressesData((oldArr) => {
                  const newArr = oldArr.map((item) => {
                    if (item._id == address._id) {
                      item.comment = e.target.value;
                    }
                    return item;
                  });
                  return newArr;
                });
              }}
            />
          </Form.Group>
        </Card>
      );
    });
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            value={userData.first_name}
            onChange={(e) => {
              setUserData({ ...userData, first_name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={userData.last_name}
            onChange={(e) => {
              setUserData({ ...userData, last_name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            value={userData.phone}
            onChange={(e) => {
              setUserData({ ...userData, phone: e.target.value });
            }}
          />
        </Form.Group>
        <hr />
        {addresses}

        <Button className="w-100" type="submit" style={{ background: 'var(--color-main)' }}>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
