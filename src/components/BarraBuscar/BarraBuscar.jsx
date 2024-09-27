import React from 'react';
import "./BarraBuscar.css";
import { Form } from 'react-router-dom';
import FormBS from 'react-bootstrap/Form';

const BarraBuscar = ({ onChange }) => {
    
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormBS className='barraBuscar'>
      <FormBS.Label className='barraBuscar__titulo'>Buscar</FormBS.Label>
      <FormBS.Control className="barraBuscar__input" type="text" onChange={handleChange} placeholder="Escribí el nombre a buscar" />
    </FormBS>
  );
};

export default BarraBuscar;