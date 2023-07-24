import data from "../../data_base/autores.json";
import Card from 'react-bootstrap/Card';
import "./ContenedorAutor.css";
import { Link } from "react-router-dom";

const ContenedorAutor = () => {
  
    return(
    <div>
        {data.map(autor => (
          <div key={autor.ID}>
            <Link to={`/autores/${autor.ID}`}>
                <Card className="tarjeta" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="tarjeta_titulo">{autor.Nombre} {autor.Apellido}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{autor.País}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Votos: {autor["# votos"]}</Card.Subtitle>
                </Card.Body>
                </Card>
            </Link>
          </div>
        ))}
      </div>
    )
};

export default ContenedorAutor;