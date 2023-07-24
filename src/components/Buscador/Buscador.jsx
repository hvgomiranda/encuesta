import data from "../../data_base/autores.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

//const handleSubmit = (e) => e.preventDefault();

const Buscador = () =>{

    /*const [busqueda, setBusqueda] = useState("");

    const handleBuscador = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (busqueda) => {
        let resultadosBusqueda = data.filter((autor) => { 
            if(autor.Nombre.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||
            autor.Apellido.toString().toLowerCase().includes(e.target.value.toLowerCase()) ||
            autor.País.toString().toLowerCase().includes(e.target.value.toLowerCase())){
                return autor;
            }});
        
        setResultadosBusqueda(resultadosBusqueda);
    };

    return (
        <div>
                <input 
                    className='buscador__ingreso'
                    type="text"
                    id="buscador"
                    onChange={handleBuscador}/>
                <button className='buscador__boton'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
        </div>
    )*/
}

export default Buscador