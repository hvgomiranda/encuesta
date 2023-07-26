import React from 'react';
import Autor from '../Autor/Autor';

const MostrarAutores = ({ autores }) => {
  return (

    <div>
      {autores.map((autor, index) => (
        <Autor key={index} autor={autor}/>
      ))}
    </div>
  )
}

export default MostrarAutores;