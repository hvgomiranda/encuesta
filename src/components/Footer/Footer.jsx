import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const Footer = () => {
    return(
        <Navbar style={{height:"10vh", borderTop:"black 1px solid"}}>
            <Container className="d-flex justify-content-center align-items-center">
                <a className="link ms-5" href="https://www.instagram.com/desmadres.festival/" target="_blank" rel="noreferrer">
                    <FaInstagram size={40} />
                </a>
                <a className="link ms-5" href="http://www.desmadres.org" target="_blank" rel="noreferrer">
                    <FaWineGlassAlt size={40} />
                </a>
                <a className="link d-flex align-items-center ms-5"  href="mailto:info@desmadres.org" target="_blank" rel="noreferrer">
                    <MdOutlineEmail size={40} />
                    <h2 style={{ marginLeft: '10px', fontSize: '2rem' }}>info@desmadres.org</h2>
                </a>
            </Container>
        </Navbar>
    )
};

export default Footer;