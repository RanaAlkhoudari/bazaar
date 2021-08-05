import React from 'react';
import { ButtonGroup, Dropdown, Row, Col, Form, Button } from 'react-bootstrap';

const handleRefresh = (e) => {
  // do refresh
};

const Filters = () => {
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap justify-content-evenly p-4 m-5">
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
                    <Form.Control placeholder="From" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="To" />
                  </Col>

                  <Col>
                    <Button variant="info" onClick={handleRefresh()}>
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
              <Dropdown.Item eventKey="old-new">Old - New</Dropdown.Item>
              <Dropdown.Item eventKey="new-old">New - Old</Dropdown.Item>
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
              <Dropdown.Item eventKey="new">New</Dropdown.Item>
              <Dropdown.Item eventKey="like-new">Like New</Dropdown.Item>
              <Dropdown.Item eventKey="fairly-user">Fairly Used</Dropdown.Item>
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
              <Dropdown.Item eventKey="amsterdam">Amsterdam</Dropdown.Item>
              <Dropdown.Item eventKey="rotterdam">Rotterdam</Dropdown.Item>
              <Dropdown.Item eventKey="assen">Assen</Dropdown.Item>
              <Dropdown.Item eventKey="groningen">Groningen</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Filters;
