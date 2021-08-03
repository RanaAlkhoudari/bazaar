import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonGroup, Dropdown, Row, Col, Form, Button } from 'react-bootstrap';
import ProductList from './ProductList';

const Filters = ({
  handlePriceRange,
  handleState,
  oldNewProducts,
  newOldProducts,
  handleLocation,
}) => {
  const [filtered, setFiltered] = useState([]);
  const [lowPrice, setLowPrice] = useState([]);
  const [highPrice, setHighPrice] = useState([]);
  const [location, setLocation] = useState([]);

  // const handleLocation = (location) => {
  //   try {
  //     const sortedLocation = categorizedProducts.filter(
  //       (item) => item.city.toLowerCase() === location.toLowerCase(),
  //     );
  //     setFiltered(sortedLocation);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div>
        <div
          className="d-flex flex-wrap justify-content-evenly p-4  m-5"
          style={{
            border: '1px solid var(--color-main)',
          }}
        >
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              style={{ backgroundColor: 'var(--color-main)', width: '260px' }}
              id="dropdown-basic"
            >
              Price
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="From"
                      onChange={(e) => setLowPrice(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="To"
                      onChange={(e) => setHighPrice(e.target.value)}
                    />
                  </Col>

                  <Col>
                    <Button
                      variant="info"
                      onClick={() => {
                        handlePriceRange(lowPrice, highPrice);
                      }}
                    >
                      Refresh
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: 'var(--color-main)', width: '260px' }}
              id="dropdown-basic"
            >
              Date
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="old-new" onClick={oldNewProducts}>
                Old - New
              </Dropdown.Item>
              <Dropdown.Item eventKey="new-old" onClick={newOldProducts}>
                New - Old
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: 'var(--color-main)', width: '260px' }}
              id="dropdown-basic"
            >
              State
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="new"
                onClick={() => {
                  handleState('new');
                }}
              >
                New
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="like-new"
                onClick={() => {
                  handleState('like new');
                }}
              >
                Like New
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="fairly-user"
                onClick={() => {
                  handleState('fairly used');
                }}
              >
                Fairly Used
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: 'var(--color-main)', width: '260px' }}
              id="dropdown-basic"
            >
              Location
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Form>
                <Row>
                  <Col>
                    {' '}
                    <Form.Control
                      placeholder="Enter City Name..."
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Button
                      onClick={() => {
                        handleLocation(location);
                      }}
                    >
                      Enter
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {filtered.length !== 0 && <ProductList products={filtered} />}
    </div>
  );
};

export default Filters;
