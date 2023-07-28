import React  from 'react'
import { Link } from "react-router-dom";
import "./Autor.css";

const Autor = ( {autor} ) => {
    
    return(
        <div>
            <Link to={`/autor/${autor.ID}`}>
                <div className="tarjetaAutor">
                        <p className="tarjeta_titulo">{autor.Nombre} {autor.Apellido}</p>
                        <p >{autor.País}</p>
                        <p >Votos: {autor["# votos"]}</p>
                        <p>Ver más</p>
                </div>
            </Link>
          </div>
        )
}

export default Autor;