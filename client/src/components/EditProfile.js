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

  const [addressesData, setAddressesData] = useState(
    user.addresses.map((address) => {
      return {
        _id: address._id,
        first_name: address.first_name,
        last_name: address.last_name,
        country: address.country,
        city: address.city,
        street_name: address.street_name,
        building_number: address.building_number,
        extension: address.extension,
        post_code: address.post_code,
        comment: address.comment,
      };
    }),
  );
  const [isAddressChanged, setIsAddressChanged] = useState(false);
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);
  console.log('isAddressChanged: ', isAddressChanged);
  console.log('isUserDataChanged: ', isUserDataChanged);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (isUserDataChanged) {
        await axios.patch(`http://localhost:3000/api/v1/users/update/${user._id}`, userData);
        setIsUserDataChanged(false);
      }
      if (isAddressChanged) {
        await addressesData.forEach((address) => {
          axios.patch(`http://localhost:3000/api/v1/addresses/update/${address._id}`, address);
          setIsAddressChanged(false);
        });
      }
      alert('Successfully updated!');
    } catch (err) {
      console.log(err);
    }
  };

  const [deleteId, setDeleteId] = useState('');
  useEffect(() => {
    if (deleteId.length > 0) {
      (async () => {
        try {
          await axios.patch(
            `http://localhost:3000/api/v1/addresses/delete/${deleteId}/${user._id}`,
            { addresses: userData.addresses },
          );
          alert('Address is deleted!');
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [deleteId]);

  let addresses = [];
  if (addressesData) {
    addresses = addressesData.map((address, index) => {
      return (
        <Card style={{ borderColor: 'var(--color-main)' }} key={address._id} className="m-3 p-3">
          <Row>
            <Col>
              <h4>Address {index + 1}</h4>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Button
                variant="danger"
                style={{ width: '10em' }}
                onClick={() => {
                  setUserData({
                    ...userData,
                    addresses: userData.addresses.filter((addr) => addr._id !== address._id),
                  });
                  setAddressesData((oldArr) => oldArr.filter((addr) => addr._id !== address._id));
                  setDeleteId(address._id);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
                setIsAddressChanged(true);
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
              setIsUserDataChanged(true);
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
              setIsUserDataChanged(true);
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
              setIsUserDataChanged(true);
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
              setIsUserDataChanged(true);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
              setIsUserDataChanged(true);
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
