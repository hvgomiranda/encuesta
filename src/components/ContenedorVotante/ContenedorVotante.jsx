import data from "../../data_base/votantes.json";
import Card from 'react-bootstrap/Card';
import "./ContenedorVotante.css";

function transformarEnlace(enlace) {
  const regex = /https:\/\/drive\.google\.com\/open\?id=(.*)/;
  const match = enlace.match(regex);
  if (match) {
    const fileId = match[1];
    const transformedLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return transformedLink;
  } else {
    // Si el enlace no coincide con el formato esperado, devolver el mismo enlace sin cambios.
    return enlace;
  }
}

const ContenedorVotante = () => {

    let listaImagenes = [];
    let value;
    
    for(let object of data){
      value = object.Foto;
      listaImagenes.push(transformarEnlace(value));
    }

    return(
      <div>
        {data.map(votante => (
          <div key={votante.ID}>
            <Card className="tarjeta" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img className="tarjeta-imagen" src={listaImagenes[(votante.ID)-1]}/>
                <Card.Title className="tarjeta_titulo">{votante.Nombre} {votante.Apellido}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{votante.Nacionalidad}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{votante["Actividad principal"].includes("x") && votante.Pronombre === "Él" ? "Masculino" : "Femenino"}</Card.Subtitle>
                <Card.Text>
                  {votante["Biografía (hasta 500 caracteres con espacios)"]}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    )
};

export default ContenedorVotante;