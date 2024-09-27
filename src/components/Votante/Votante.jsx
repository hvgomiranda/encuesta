import React  from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Votante.css";

const Votante = ( {votante} ) => {
    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{votante.Nombre} {votante.Apellido}</Card.Title>
                <ListGroup.Item>{votante.Nacionalidad}</ListGroup.Item>
                <ListGroup.Item>{votante["Actividad principal"]}</ListGroup.Item>
                <Card.Text>
                </Card.Text>
                <Link className='linkAutor' to={`/votante/${votante.ID}`}><Button variant="outline-primary">Ver más</Button></Link>
            </Card.Body>
        </Card>
        )
}

export default Votante;