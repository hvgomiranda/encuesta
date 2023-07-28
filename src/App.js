import './App.css';
import React from 'react';
import DetalleAutor from './components/DetalleAutor/DetalleAutor';
import DetalleVotante from './components/DetalleVotante/DetalleVotante';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import BuscadorVotantes from './components/BuscadorVotantes/BuscadorVotantes';
import { Route, Routes } from 'react-router-dom';
import datos from "./data_base/autores.json";
import datosVotantes from "./data_base/votantes.json";

const Home = () => <h1>Home</h1>

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/encuesta" element={<Home/>}></Route>
        <Route path="/autor/:autorID" element={<DetalleAutor/>}></Route>
        <Route path="/votante/:votanteID" element={<DetalleVotante/>}></Route>
        <Route path="/buscarAutores" element={<Buscador autores={datos}/>}></Route>
        <Route path="/buscarVotantes" element={<BuscadorVotantes votantes={datosVotantes}/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
