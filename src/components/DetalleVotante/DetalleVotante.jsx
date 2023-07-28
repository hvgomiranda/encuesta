import data from "../../data_base/autores.json";
import dataVotantes from "../../data_base/votantes.json";
import "./DetalleVotante.css";
import { useParams, Link } from "react-router-dom";

const DetalleVotante = () => {

    const {votanteID} = useParams();
    const thisVotante = dataVotantes.find(votante => votante.ID === parseInt(votanteID));
    let listaAutores = [];

    for(let autor of data){
        if(thisVotante.Apellido__1 === autor.Apellido && thisVotante.Nombre__1 === autor.Nombre){
            listaAutores.push(autor);
        } else if(thisVotante.Apellido__2 === autor.Apellido && thisVotante.Nombre__2 === autor.Nombre){
            listaAutores.push(autor);
        } else if(thisVotante.Apellido__3 === autor.Apellido && thisVotante.Nombre__3 === autor.Nombre){
            listaAutores.push(autor);
        } else if(thisVotante.Apellido__4 === autor.Apellido && thisVotante.Nombre__4 === autor.Nombre){
            listaAutores.push(autor);
        } else if(thisVotante.Apellido__5 === autor.Apellido && thisVotante.Nombre__5 === autor.Nombre){
            listaAutores.push(autor);
        }
    }

    return(
    <div>
        <div className="tarjetaDetalleVotante">
            <h3 className="tarjetaDetalleVotante_titulo">{thisVotante.Nombre} {thisVotante.Apellido}</h3>
            <p>{thisVotante.Nacionalidad}</p>
            <p>
                Votó a: {listaAutores.map((autor, i) => (
                    <Link to={`/autor/${autor.ID}`} key={i}>
                        {`${autor.Nombre} ${autor.Apellido}`}{i!==listaAutores.length-1 ? ", " : "."} 
                    </Link>
                ))}
            </p>
            <p>
                BIOGRAFÍA
            </p>
        </div>
      </div>
    )
};

export default DetalleVotante;