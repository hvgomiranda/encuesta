import React  from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Autor.css";

const Autor = ( {autor, formato} ) => {
    
    return(
        formato==="medio" ?
            <motion.div
            initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                  duration: 0.3
                }
              }}>
                <Link className='link-autor' to={`/autor/${autor.ID}`}>
                    <Card style={{ width: "18vw", marginBottom: "20px" }}>
                        <Card.Img 
                        style={{height:"auto", objectFit: 'cover' }}
                        variant="top"
                        src={autor.Imagen ? autor.Imagen : `${process.env.PUBLIC_URL}/media/default-avatar.jpg`}
                        alt={`${autor.Nombre} ${autor.Apellido}`}
                        />
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>{autor.Nombre} {autor.Apellido}</Card.Title>
                            <Card.Text>
                                <ListGroup.Item>{autor.País}</ListGroup.Item>
                                <ListGroup.Item>{autor["# votos"]} {autor["# votos"]>1 ? "votos" : "voto"}</ListGroup.Item>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </motion.div>
            :
            <motion.div
            initial={{
                opacity: 0
              }}
              viewport={{ amount: 0.05 }}
              whileInView={{
                opacity: 1,
                x: 0, 
                transition: {
                  duration: 0.3
                  
                }
            }}>
                <Link className='link-autor' to={`/autor/${autor.ID}`}>
                    <Card style={{ width: "35vw", height: "20vh", marginBottom: "20px" }} className='card d-flex flex-row'>
                        <Card.Img 
                        style={{  width:"30%", height:"auto", objectFit: 'cover' }}
                        variant="left"
                        src={autor.Imagen ? autor.Imagen : `${process.env.PUBLIC_URL}/media/default-avatar.jpg`}
                        alt={`${autor.Nombre} ${autor.Apellido}`}
                        />
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>{autor.Nombre} {autor.Apellido}</Card.Title>
                            <Card.Text>
                                <ListGroup.Item>{autor.País}</ListGroup.Item>
                                <ListGroup.Item>{autor["# votos"]} {autor["# votos"]>1 ? "votos" : "voto"}</ListGroup.Item>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </motion.div>
        )
}

export default Autor;