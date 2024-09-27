import React from 'react';
import Autor from '../Autor/Autor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MostrarAutores = ({ autores, formato }) => {
  return (
    <div className="container">
      <Row className="g-1">
        {autores.map((autor, index) => (
          <Col className="m-1">
            <Autor key={index} autor={autor} formato={formato} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MostrarAutores;