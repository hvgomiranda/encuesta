import React from 'react';

const BarraBuscar = ({ onChange }) => {
    
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>Buscar</h2>
      <input type="text" onChange={handleChange} placeholder="Escribí el término a buscar" />
    </div>
  );
};

export default BarraBuscar;