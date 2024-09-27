import './App.css';
import React from 'react';
import DetalleAutor from './components/DetalleAutor/DetalleAutor';
import DetalleVotante from './components/DetalleVotante/DetalleVotante';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import BuscadorVotantes from './components/BuscadorVotantes/BuscadorVotantes';
import { Route, Routes } from 'react-router-dom';
import datos from "./data_base/autores.json";
import datosVotantes from "./data_base/votantes.json";
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <div className="App">
      <Header/>
      <Container>
      <Routes>
        <Route path="/encuesta" element={<Home autores={datos} />}></Route>
        <Route path="/autor/:autorID" element={<DetalleAutor/>}></Route>
        <Route path="/votante/:votanteID" element={<DetalleVotante/>}></Route>
        <Route path="/buscarAutores" element={<Buscador autores={datos} />}></Route>
        <Route path="/buscarVotantes" element={<BuscadorVotantes votantes={datosVotantes}/>}></Route>
        <Route path="/top-20" element={<Home autores={datos} />}></Route>
        <Route path="/editorial" element={<Home autores={datos} />}></Route>
        <Route path="/nosotros" element={<Home autores={datos} />}></Route>
      </Routes>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
