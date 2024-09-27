import { useState } from "react";
import BarraBuscar from "../BarraBuscar/BarraBuscar";
import MostrarVotantes from "../MostrarVotantes/MostrarVotantes";
import SeleccionadorOrdenar from '../SeleccionadorOrdenar/SeleccionadorOrdenar';

const BuscadorVotantes = ({ votantes }) => {
    
    const [busqueda, setBusqueda] = useState("");
    const [nacionalidad, setNacionalidad] = useState("Todos");

    let valoresNacionalidad = ["Todos", "Albania", "Alemania", "Argentina", "Bolivia", "Brasil", "Canadá", "Chile", "China", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Estados Unidos", "Francia", "Guatemala", "Israel", "Italia", "Haití", "México", "Nicaragua", "Noruega", "Panamá", "Paraguay", "Perú", "Polonia", "Portugal", "Puerto Rico", "Reino Unido", "República Checa", "República Dominicana", "Suecia", "Uruguay", "Venezuela"];

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
    const filtrarVotantes = () => {

        let votantesFiltratos = votantes.filter((votante) =>
        removeAccents(votante.Nombre).toLowerCase().includes(removeAccents(busqueda.toLowerCase())) ||
        removeAccents(votante.Apellido).toLowerCase().includes(removeAccents(busqueda.toLowerCase())) ||
        removeAccents(votante.Nacionalidad).toLowerCase().includes(removeAccents(busqueda.toLowerCase()))
        );

        if(nacionalidad !== "Todos"){
            votantesFiltratos = votantesFiltratos.filter((votante) => votante.Nacionalidad === nacionalidad);
        }

        return votantesFiltratos;
    };
    
    return(
        <div className='headerBusqueda'>
            <BarraBuscar onChange={(valor) => setBusqueda(valor)} />
            <SeleccionadorOrdenar onChange={(valor) => setNacionalidad(valor)} values={valoresNacionalidad}/>
            <MostrarVotantes votantes={filtrarVotantes()}/>
        </div>
    )
};

export default BuscadorVotantes;