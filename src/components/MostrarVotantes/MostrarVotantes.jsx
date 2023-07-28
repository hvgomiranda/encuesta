import React from 'react';
import Votante from '../Votante/Votante';

const mostrarVotantes = ({ votantes }) => {
  return (

    <div>
      {votantes.map((votante, index) => (
        <Votante key={index} votante={votante}/>
      ))}
    </div>
  )
}

export default mostrarVotantes;