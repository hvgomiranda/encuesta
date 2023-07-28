import React, { useState } from 'react';
import BarraBuscar from "../BarraBuscar/BarraBuscar";
import MostrarAutores from '../MostrarAutores/MostrarAutores'; 
import SeleccionadorBuscar from '../SeleccionadorBuscar/SeleccionadorBuscar';
import SeleccionadorOrdenar from '../SeleccionadorOrdenar/SeleccionadorOrdenar';
import "./Buscador.css";

const Buscador = ({ autores }) => {

  const [busqueda, setBusqueda] = useState("");
  const [nacionalidad, setNacionalidad] = useState("Todos");
  const [orden, setOrden] = useState("A - Z");

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  const filtrarAutores = () => {
    let autoresFiltrados = autores.filter((autor) =>
        removeAccents(autor.Nombre).toLowerCase().includes(removeAccents(busqueda.toLowerCase())) ||
        removeAccents(autor.Apellido).toLowerCase().includes(removeAccents(busqueda.toLowerCase())) ||
        removeAccents(autor.País).toLowerCase().includes(removeAccents(busqueda.toLowerCase()))
    );

    if(nacionalidad !== "Todos"){
      autoresFiltrados = autoresFiltrados.filter((autor) => autor.País === nacionalidad);
    }

    autoresFiltrados = orden === "A - Z" ? autoresFiltrados.sort((a, b) => a.Apellido.localeCompare(b.Apellido)) : autoresFiltrados;
    autoresFiltrados = orden === "Z - A" ? autoresFiltrados.sort((a, b) => b.Apellido.localeCompare(a.Apellido)) : autoresFiltrados;
    autoresFiltrados = orden === "Votos (mayor a menor)" ? autoresFiltrados.sort((a, b) => a["# votos"] > b["# votos"]) : autoresFiltrados;
    autoresFiltrados = orden === "Votos (menor a mayor)" ? autoresFiltrados.sort((a, b) => a["# votos"] - b["# votos"]) : autoresFiltrados;

    return autoresFiltrados;
  };

  return (
    <div className='headerBusqueda'>
      <BarraBuscar onChange={(valor) => setBusqueda(valor)} />
      <div className='headerBusqueda__orden'>
        <SeleccionadorBuscar onChange={(valor) => setNacionalidad(valor)} />
        <SeleccionadorOrdenar onChange={(valor) => setOrden(valor)}/>
      </div>
      <MostrarAutores autores={filtrarAutores()} />
    </div>
  );
};

export default Buscador;