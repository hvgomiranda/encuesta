import React, { useState } from 'react';
import BarraBuscar from "../BarraBuscar/BarraBuscar";
import MostrarAutores from '../MostrarAutores/MostrarAutores';
import SeleccionadorOrdenar from '../SeleccionadorOrdenar/SeleccionadorOrdenar';
import "./Buscador.css";
import { Form } from 'react-bootstrap';

const Buscador = ({ autores }) => {

  const [busqueda, setBusqueda] = useState("");
  const [nacionalidad, setNacionalidad] = useState("Todos");
  const [orden, setOrden] = useState("A - Z");
  const [genero, setGenero] = useState("Todos");

  let valoresOrden = ["A - Z", "Z - A", "Votos (mayor a menor)", "Votos (menor a mayor)"];
  let valoresNacionalidad = ["Todos", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "Estados Unidos", "Guadeloupe", "Guatemala", "Haití", "Martinica", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela"];
  let valoresGenero = ["Todos", "Masculino", "Femenino"];

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

    if(genero !== "Todos"){
      autoresFiltrados = autoresFiltrados.filter((autor) => autor.Genero === genero);
    }

    autoresFiltrados = orden === "A - Z" ? autoresFiltrados.sort((a, b) => a.Apellido.localeCompare(b.Apellido)) : autoresFiltrados;
    autoresFiltrados = orden === "Z - A" ? autoresFiltrados.sort((a, b) => b.Apellido.localeCompare(a.Apellido)) : autoresFiltrados;
    autoresFiltrados = orden === "Votos (mayor a menor)" ? autoresFiltrados.sort((a, b) => a["# votos"] > b["# votos"]) : autoresFiltrados;
    autoresFiltrados = orden === "Votos (menor a mayor)" ? autoresFiltrados.sort((a, b) => a["# votos"] - b["# votos"]) : autoresFiltrados;

    return autoresFiltrados;
  };
  //<SeleccionadorOrdenar onChange={(valor) => setGenero(valor)} values={valoresGenero}/>

  return (
    <div>
      <Form className='headerBusqueda'>
        <BarraBuscar onChange={(valor) => setBusqueda(valor)} />
        <div className='headerBusqueda__orden'>
          <SeleccionadorOrdenar onChange={(valor) => setNacionalidad(valor)} values={valoresNacionalidad}/>
          <SeleccionadorOrdenar onChange={(valor) => setOrden(valor)} values={valoresOrden}/>
        </div>
      </Form>
        <MostrarAutores autores={filtrarAutores()} formato="medio" />
    </div>
  );
};

export default Buscador;