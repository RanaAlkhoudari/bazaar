import React from 'react';
import { DropdownButton, Dropdown, Row, Col, Form, Button } from 'react-bootstrap';

const handleRefresh = (e) => {
  // do refresh
};

const Filters = () => {
  return (
    <div className="filter">
      <div>
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
      </div>

      <div>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.ItemText>Date</Dropdown.ItemText>
          <Dropdown.Item as="button">Date 1</Dropdown.Item>
          <Dropdown.Item as="button">Date 2</Dropdown.Item>
          <Dropdown.Item as="button">Date 3</Dropdown.Item>
        </DropdownButton>
      </div>

      <div>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.ItemText>State</Dropdown.ItemText>
          <Dropdown.Item as="button">New</Dropdown.Item>
          <Dropdown.Item as="button">Used</Dropdown.Item>
        </DropdownButton>
      </div>

      <div>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.ItemText>Location</Dropdown.ItemText>
          <Dropdown.Item as="button">Location 1</Dropdown.Item>
          <Dropdown.Item as="button">Location 2</Dropdown.Item>
          <Dropdown.Item as="button">Location 3</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Filters;
