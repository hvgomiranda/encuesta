import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
    return(
        <Navbar expand="lg" sticky="top" className="header justify-content-between">
            <Container>
                <Navbar.Brand><Link  className="link" to="/">Encuesta de escritores</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <NavDropdown title="Buscar" id="basic-nav-dropdown" className="ms-4">
                    <NavDropdown.Item className="nav-dropdown-item"><Link className="link" to="/buscarAutores">Buscar autores</Link></NavDropdown.Item>
                    <NavDropdown.Item className="nav-dropdown-item"><Link className="link" to="/buscarVotantes">Buscar votantes</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className="ms-4">Editorial</Nav.Item>
                <Nav.Item className="ms-4">Sobre nosotros</Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;