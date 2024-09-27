import React from 'react';
import "./SeleccionadorOrdenar.css";
import { Form } from 'react-bootstrap';

const SeleccionadorOrdenar = ({ onChange, values }) =>{
    
    const handleChange = (event) => {
        onChange(event.target.value);
      };

    return(
        <Form.Select className='seleccionadorOrdenar' name="Orden" id="Orden" onChange={handleChange}>
            {values.map((value, i) => (
                <option value={value} key={i}>{`${value}`}</option>
            ))}
        </Form.Select>
    )
};

export default SeleccionadorOrdenar;