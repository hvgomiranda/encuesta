import React from 'react';
import "./BarraBuscar.css";

const BarraBuscar = ({ onChange }) => {
    
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='barraBuscar'>
      <h2 className='barraBuscar__titulo'>Buscar</h2>
      <input className="barraBuscar__input" type="text" onChange={handleChange} placeholder="Escribí el término a buscar" />
    </div>
  );
};

export default BarraBuscar;