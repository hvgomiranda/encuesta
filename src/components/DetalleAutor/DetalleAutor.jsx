import Container from "react-bootstrap/Container";
import data from "../../data_base/autores.json";
import dataVotante from "../../data_base/votantes.json";
import "./DetalleAutor.css";
import { useParams, Link } from "react-router-dom";

const DetalleAutor = () => {

    const {autorID} = useParams();
    const thisAutor = data.find(autor => autor.ID === parseInt(autorID));
    let listaVotantes = [];

    for(let votante of dataVotante){
        if(votante.Apellido__1 === thisAutor.Apellido && votante.Nombre__1 === thisAutor.Nombre){
            listaVotantes.push(votante);
        } else if(votante.Apellido__2 === thisAutor.Apellido && votante.Nombre__2 === thisAutor.Nombre){
            listaVotantes.push(votante);
        } else if(votante.Apellido__3 === thisAutor.Apellido && votante.Nombre__3 === thisAutor.Nombre){
            listaVotantes.push(votante);
        } else if(votante.Apellido__4 === thisAutor.Apellido && votante.Nombre__4 === thisAutor.Nombre){
            listaVotantes.push(votante);
        } else if(votante.Apellido__5 === thisAutor.Apellido && votante.Nombre__5 === thisAutor.Nombre){
            listaVotantes.push(votante);
        }
    }

    return(
    <Container>
        <div className="tarjetaDetalleAutor">
            <h3 className="tarjeta_titulo">{thisAutor.Nombre} {thisAutor.Apellido}</h3>
            <p>{thisAutor.País}</p>
            <p >{thisAutor["# votos"]} votos</p>
            <p>
                {listaVotantes.map((votante, i) => (
                    <Link className="link" to={`/votante/${votante.ID}`} key={i}>
                        {`${votante.Nombre} ${votante.Apellido}`}{i!==listaVotantes.length-1 ? ", " : "."} 
                    </Link>
                ))}
            </p>
            <p>
                BIOGRAFÍA
            </p>
        </div>
      </Container>
    )
};

export default DetalleAutor;