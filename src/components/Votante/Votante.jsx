import React  from 'react'
import { Link } from "react-router-dom";
import "./Votante.css";

const Autor = ( {votante} ) => {
    
    return(
        <div>
            <Link to={`/votante/${votante.ID}`}>
                <div className="tarjetaAutor">
                        <p className="tarjeta_titulo">{votante.Nombre} {votante.Apellido}</p>
                        <p>{votante.Nacionalidad}</p>
                        <p>{votante["Actividad principal"]}</p>
                        <p>Ver más</p>
                </div>
            </Link>
          </div>
        )
}

export default Autor;