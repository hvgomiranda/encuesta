import React from 'react';
import "./BarraBuscar.css";
import Form from 'react-bootstrap/Form';

const BarraBuscar = ({ onChange }) => {
    
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Form className='barraBuscar'>
      <Form.Label className='barraBuscar__titulo'>Buscar</Form.Label>
      <Form.Control size="lg" className="barraBuscar__input" type="text" onChange={handleChange} placeholder="Escribí el nombre a buscar" />
    </Form>
  );
};

export default BarraBuscar;