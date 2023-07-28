import { useState } from "react";
import BarraBuscar from "../BarraBuscar/BarraBuscar";
import MostrarVotantes from "../MostrarVotantes/MostrarVotantes";

const BuscadorVotantes = ({ votantes }) => {
    
    const [busqueda, setBusqueda] = useState("");

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
    const filtrarVotantes = () => {

        let votantesFiltratos = votantes.filter((votante) =>
        removeAccents(votante.Nombre).toLowerCase().includes(removeAccents(busqueda.toLowerCase())) ||
        removeAccents(votante.Apellido).toLowerCase().includes(removeAccents(busqueda.toLowerCase())) ||
        removeAccents(votante.Nacionalidad).toLowerCase().includes(removeAccents(busqueda.toLowerCase()))
        );


        return votantesFiltratos;
    };
    
    return(
        <div className='headerBusqueda'>
            <BarraBuscar onChange={(valor) => setBusqueda(valor)} />
            <MostrarVotantes votantes={filtrarVotantes()}/>
        </div>
    )
};

export default BuscadorVotantes;