import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
            <h1 className="logo"><Link to="/">Encuesta de autores</Link></h1>
            <div className="navbar">
                <h1><Link to="/autores">Autores</Link></h1>
                <h1><Link to="/votantes">Votantes</Link></h1>
                <h1><Link to="/buscar">Buscar</Link></h1>
            </div>
        </div>
    )
}

export default Header;