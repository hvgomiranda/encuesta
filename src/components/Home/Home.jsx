import MostrarAutores from "../MostrarAutores/MostrarAutores";
import Container from "react-bootstrap/Container";
import "./Home.css"
import { motion } from "framer-motion";


const Home = ( {autores} ) => {

    function topAutores() {
        const autoresEnOrden = autores.sort((a, b) => b["# votos"] - a["# votos"]);
        
        const top20 = autoresEnOrden.slice(0, 10);
        
        return top20;
    };

    const text = "ENCUESTA DE ESCRITORES|LATINOAMERICANOS".split("|");    

    return(
        <Container>
            <Container className="d-flex flex-column flex-wrap justify-content-center align-items-center noselect" style={{height:"90vh"}}>
                {text.map((el, i) => (
                    <motion.span
                        style={{ fontSize:"12vh",  marginRight: "2rem"}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: i / 2,
                        }}
                        key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
            </Container>

            <Container className="container-home top-home">
                <h1 style={{ padding:"20px" }} className="text-center noselect">Los 10 más votados</h1>
                <MostrarAutores autores={topAutores()} formato={"grande"} />
            </Container>

            <Container className="container-home">
                <h1 className="text-center noselect">¿Quiénes votaron?</h1>
                <p className="text-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat doloribus perferendis quaerat? Incidunt adipisci pariatur neque, aliquid, fuga officia quam dolores ratione ut repellat delectus sit dolore cumque iure numquam quidem aperiam, ullam facilis quisquam dolor sed. Maiores commodi a nobis officia facere facilis, enim eligendi perferendis, dignissimos, fugiat dolorum ipsam distinctio cupiditate inventore hic totam rerum alias dolore!</p>
            </Container>

            <Container className="container-home">
                <h1 className="text-center noselect">La encuesta</h1>
                <p className="text-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat doloribus perferendis quaerat? Incidunt adipisci pariatur neque, aliquid, fuga officia quam dolores ratione ut repellat delectus sit dolore cumque iure numquam quidem aperiam, ullam facilis quisquam dolor sed. Maiores commodi a nobis officia facere facilis, enim eligendi perferendis, dignissimos, fugiat dolorum ipsam distinctio cupiditate inventore hic totam rerum alias dolore!</p>
            </Container>

            <Container className="container-home">
                <h1 className="text-center noselect">Desmadres</h1>
                <p className="text-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat doloribus perferendis quaerat? Incidunt adipisci pariatur neque, aliquid, fuga officia quam dolores ratione ut repellat delectus sit dolore cumque iure numquam quidem aperiam, ullam facilis quisquam dolor sed. Maiores commodi a nobis officia facere facilis, enim eligendi perferendis, dignissimos, fugiat dolorum ipsam distinctio cupiditate inventore hic totam rerum alias dolore!</p>
            </Container>
        </Container>
    )

    
}

export default Home;