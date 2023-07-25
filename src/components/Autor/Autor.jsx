import React  from 'react'
import Card from 'react-bootstrap/Card';
import dataVotante from "../../data_base/votantes.json";

const Autor = ( {thisAutor} ) => {
    
    let listaVotantes = [];

    for(let votante of dataVotante){
        if(votante.Apellido__1 === thisAutor.Apellido && votante.Nombre__1 === thisAutor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__2 === thisAutor.Apellido && votante.Nombre__2 === thisAutor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__3 === thisAutor.Apellido && votante.Nombre__3 === thisAutor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__4 === thisAutor.Apellido && votante.Nombre__4 === thisAutor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        } else if(votante.Apellido__5 === thisAutor.Apellido && votante.Nombre__5 === thisAutor.Nombre){
            listaVotantes.push(`${votante.Nombre}, ${votante.Apellido}`);
        }
    }
    
    return(
        <div>
            <Card className="tarjeta" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="tarjeta_titulo">{thisAutor.Nombre} {thisAutor.Apellido}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{thisAutor.País}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Votos: {thisAutor["# votos"]}</Card.Subtitle>
                    <Card.Text>
                        Votado por: {listaVotantes.map((votante, i) => (
                            <div key={i}>
                                {votante}
                            </div>
                        ))}
                    </Card.Text>
                    <Card.Text>
                        BIOGRAFÍA
                    </Card.Text>
                </Card.Body>
            </Card>
          </div>
        )
}

export default Autor