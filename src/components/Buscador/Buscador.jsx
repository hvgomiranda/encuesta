import React, { useState } from 'react';
import BarraBuscar from "../BarraBuscar/BarraBuscar";
import MostrarAutores from '../MostrarAutores/MostrarAutores'; 

const Buscador = ({ autores }) => {

  const [busqueda, setBusqueda] = useState('');

  const filtrarAutores = () => {
    return autores.filter(
      (autor) =>
        autor.Nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        autor.Apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
        autor.País.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  return (
    <div>
      <BarraBuscar onChange={(valor) => setBusqueda(valor)} />
      <MostrarAutores autores={filtrarAutores()} />
    </div>
  );
};

export default Buscador;

/*const handleSubmit = (e) => e.preventDefault();

const Buscador = () =>{

    const [busqueda, setBusqueda] = useState("");

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
    )
}

export default Buscador*/