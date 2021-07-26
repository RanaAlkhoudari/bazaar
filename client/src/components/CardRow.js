import React from 'react';
import { Container, Row } from 'react-bootstrap';

const CardRow = ({ children }) => {
  return (
    <Container style={{ margin: '2px 0', backgroundColor: 'rgba(0,128,128,0.1)' }}>
      <Row style={{ alignItems: 'center' }}>{children}</Row>
    </Container>
  );
};

export default CardRow;
