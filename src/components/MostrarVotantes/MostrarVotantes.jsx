import React from 'react';
import Votante from '../Votante/Votante';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mostrarVotantes = ({ votantes }) => {
  return (
    <div className='container'>
      <Row className="g-1">
        {votantes.map((votante, index) => (
          <Votante key={index} votante={votante}/>
        ))}
      </Row>
    </div>
  )
}

export default mostrarVotantes;