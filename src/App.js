import './App.css';
import React from 'react';
import DetalleAutor from './components/DetalleAutor/DetalleAutor';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import { Route, Routes } from 'react-router-dom';
import datos from "./data_base/autores.json";

const Home = () => <h1>Home</h1>

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/encuesta" element={<Home/>}></Route>
        <Route path="/autores/:autorID" element={<DetalleAutor/>}></Route>
        <Route path="/buscar" element={<Buscador autores={datos}/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
