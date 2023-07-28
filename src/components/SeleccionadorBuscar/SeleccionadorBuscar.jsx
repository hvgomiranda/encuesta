import React from 'react'
import "./SeleccionadorBuscar.css"

const SeleccionadorBuscar = ({ onChange }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
      };

    return (
      <select className='seleccionadorBuscar' name="País" id="País" onChange={handleChange}>
        <option value="Todos">Todos</option>
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Cuba">Cuba</option>
        <option value="Ecuador">Ecuador</option>
        <option value="El Salvador">El Salvador</option>
        <option value="Estados Unidos">Estados Unidos</option>
        <option value="Guadeloupe">Guadeloupe</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Haití">Haití</option>
        <option value="Martinica">Martinica</option>
        <option value="México">México</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Panamá">Panamá</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Perú">Perú</option>
        <option value="Puerto Rico">Puerto Rico</option>
        <option value="República Dominicana">República Dominicana</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </select>
  )
}

export default SeleccionadorBuscar