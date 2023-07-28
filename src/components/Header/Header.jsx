import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
            <h1 className="logo"><Link to="/encuesta">Encuesta de autores</Link></h1>
            <div className="navbar">
                <h1><Link to="/buscarAutores">Buscar autores</Link></h1>
                <h1><Link to="/buscarVotantes">Buscar votantes</Link></h1>
            </div>
        </div>
    )
}

export default Header;