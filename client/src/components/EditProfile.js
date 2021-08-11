import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const EditProfile = ({ user }) => {
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
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
  const [addressChanged, setAddressChanged] = useState('');
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);

  const editData = async (e) => {
    try {
      e.preventDefault();

      if (firstNameRef.current.value.length === 0 || lastNameRef.current.value.length === 0) {
        setError('Please inter your first and last name');
        setSuccess(false);
        return;
      };

      if (isUserDataChanged) {
        await axios.patch(`${process.env.REACT_APP_API_URL}/users/update/${user._id}`, userData);
        setIsUserDataChanged(false);
      };

      if (addressChanged.length > 0) {
        const addr = addressesData.find((address) => address._id === addressChanged);
        await axios.patch(`${process.env.REACT_APP_API_URL}/addresses/update/${addressChanged}`, addr);
        setAddressChanged('');
      };

      if (passwordRef.current.value < 6) {
        setError('Password must include at least six symbols');
        setSuccess(false);
        return;
      };

      let passwordWithNum = [];
      Object.assign([], passwordRef.current.value).forEach((item) => {
        const isNumeric = /^-?\d+$/.test(item);
        if (isNumeric) passwordWithNum.push(item);
      });

      if (passwordWithNum.length === 0) {
        setError('Password must include at least one number');
        setSuccess(false);
        return;
      };

      setSuccess('Successfully updated!');
      setError(false);
    } catch (err) {
      console.log(err);
    };
  };

  const [deleteId, setDeleteId] = useState('');
  useEffect(() => {
    if (deleteId.length > 0) {
      (async () => {
        try {
          await axios.patch(
            `${process.env.REACT_APP_API_URL}/addresses/delete/${deleteId}/${user._id}`,
            { addresses: userData.addresses },
          );
          alert('Address is deleted!');
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [deleteId, user._id, userData.addresses]);

  const [newAddress, setNewAddress] = useState({
    user: user._id,
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    street_name: '',
    building_number: '',
    extension: '',
    post_code: '',
    comment: '',
  });

  const addAddress = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/addresses/create`,
        newAddress,
      );

      const addressAdded = {
        _id: response.data.address._id,
        first_name: response.data.address.first_name,
        last_name: response.data.address.last_name,
        country: response.data.address.country,
        city: response.data.address.city,
        street_name: response.data.address.street_name,
        building_number: response.data.address.building_number,
        extension: response.data.address.extension,
        post_code: response.data.address.post_code,
        comment: response.data.address.comment,
      };
      setAddressesData((oldArr) => [...oldArr, addressAdded]);
      setUserData({
        ...userData,
        addresses: [...userData.addresses, addressAdded],
      });
      setNewAddress({
        user: user._id,
        first_name: '',
        last_name: '',
        country: '',
        city: '',
        street_name: '',
        building_number: '',
        extension: '',
        post_code: '',
        comment: '',
      });
      alert('Address is added!');
    } catch (err) {
      console.log(err);
    }
  };

  let addresses = [];
  if (addressesData) {
    addresses = addressesData.map((address, index) => {
      return (
        <div key={address._id}>
          <div>
            <Container
              className="d-flex "
              style={{ maxHeight: '75vh' }}
            >
              <Card className="m-3 p-3 " style={{ width: '22rem' }}>
                <Row>
                  <Col>
                    <h4>Address {index + 1}</h4>
                  </Col>
                  <Col style={{ textAlign: 'right' }}></Col>
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
                          if (item._id === address._id) {
                            item.first_name = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.last_name = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.country = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.city = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.street_name = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.building_number = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.extension = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.post_code = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
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
                          if (item._id === address._id) {
                            item.comment = e.target.value;
                          }
                          return item;
                        });
                        return newArr;
                      });
                      setAddressChanged(address._id);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="danger"
                  className="w-100"
                  onClick={() => {
                    setUserData({
                      ...userData,
                      addresses: userData.addresses.filter((addr) => addr._id !== address._id),
                    });
                    setAddressesData((oldArr) =>
                      oldArr.filter((addr) => addr._id !== address._id),
                    );
                    setDeleteId(address._id);
                  }}
                >
                  Delete
                </Button>
              </Card>
            </Container>
          </div>
        </div>
      );
    });
  }

  return (
    <Container style={{ minHeight: '40vh' }} className="d-flex flex-wrap">
      <Card style={{ width: '22rem', height: '795px' }} className="m-3 p-3">
        {error && !success && <Alert variant="danger ">{error}</Alert>}
        {success && !error && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={editData}>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              value={userData.first_name}
              ref={firstNameRef}
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
              ref={lastNameRef}
              onChange={(e) => {
                setUserData({ ...userData, last_name: e.target.value });
                setIsUserDataChanged(true);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
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
              ref={passwordRef}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
                setIsUserDataChanged(true);
              }}
            />
          </Form.Group>
          <Button
            className="w-100"
            type="submit"
            style={{ background: 'var(--color-main)', marginBottom: '-100px' }}
          >
            Save
          </Button>
        </Form>
      </Card>
      {addresses}

      <Form onSubmit={addAddress}>
        <Card className="m-3 p-3" style={{ width: '22rem' }}>
          <h4>Add new address</h4>
          <Form.Group>
            <Form.Label>Recipient (if the name is different from yours)</Form.Label>
            <br />
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              value={newAddress.first_name}
              onChange={(e) => {
                setNewAddress({ ...newAddress, first_name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              value={newAddress.last_name}
              onChange={(e) => {
                setNewAddress({ ...newAddress, last_name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country: *</Form.Label>
            <Form.Control
              required
              type="text"
              value={newAddress.country}
              onChange={(e) => {
                setNewAddress({ ...newAddress, country: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City: *</Form.Label>
            <Form.Control
              required
              type="text"
              value={newAddress.city}
              onChange={(e) => {
                setNewAddress({ ...newAddress, city: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Street: *</Form.Label>
            <Form.Control
              required
              type="text"
              value={newAddress.street_name}
              onChange={(e) => {
                setNewAddress({ ...newAddress, street_name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Building Number: *</Form.Label>
            <Form.Control
              required
              type="text"
              value={newAddress.building_number}
              onChange={(e) => {
                setNewAddress({ ...newAddress, building_number: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Extension:</Form.Label>
            <Form.Control
              type="text"
              value={newAddress.extension}
              onChange={(e) => {
                setNewAddress({ ...newAddress, extension: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Postal code: *</Form.Label>
            <Form.Control
              required
              type="text"
              value={newAddress.post_code}
              onChange={(e) => {
                setNewAddress({ ...newAddress, post_code: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              type="text"
              value={newAddress.comment}
              onChange={(e) => {
                setNewAddress({ ...newAddress, comment: e.target.value });
              }}
            />
          </Form.Group>
          <Button className="w-100" type="submit" style={{ background: 'var(--color-main)' }}>
            Add
          </Button>
        </Card>
      </Form>
    </Container>
  );
};

export default EditProfile;
