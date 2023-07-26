import React  from 'react'
import "./Autor.css";

const Autor = ( {autor} ) => {
    
    /*let listaVotantes = [];

    for(let votante of dataVotante){
        if(votante.Apellido__1 === autor.Apellido && votante.Nombre__1 === autor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__2 === autor.Apellido && votante.Nombre__2 === autor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__3 === autor.Apellido && votante.Nombre__3 === autor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__4 === autor.Apellido && votante.Nombre__4 === autor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__5 === autor.Apellido && votante.Nombre__5 === autor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        }
    }

    <Card.Text>
    Votado por: {listaVotantes.map((votante, i) => (
        <div key={i}>
            {votante}
        </div>
    ))}
    </Card.Text>*/
    
    return(
        <div>
            <div className="tarjetaAutor" style={{ width: '18rem' }}>
                
                    <p className="tarjeta_titulo">{autor.Nombre} {autor.Apellido}</p>
                    <p className="mb-2 text-muted">{autor.País}</p>
                    <p className="mb-2 text-muted">Votos: {autor["# votos"]}</p>
                    <p>
                        BIOGRAFÍA
                    </p>
            </div>
          </div>
        )
}

export default Autor;