import React from 'react';
import "./SeleccionadorOrdenar.css";

const SeleccionadorOrdenar = ({ onChange }) =>{
    
    const handleChange = (event) => {
        onChange(event.target.value);
      };

    return(
        <select className='seleccionadorOrdenar' name="Orden" id="Orden" onChange={handleChange}>
            <option value="A - Z">A - Z</option>
            <option value="Z - A">Z - A</option>
            <option value="Votos (mayor a menor)">Votos (mayor a menor)</option>
            <option value="Votos (menor a mayor)">Votos (menor a mayor)</option>
        </select>
    )
};

export default SeleccionadorOrdenar;