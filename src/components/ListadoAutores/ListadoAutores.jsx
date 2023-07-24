import React from 'react'
import Autor from '../Autor/Autor'

const ListadoAutores = ({ resultadoBusqueda }) => {
    const resultados = resultadoBusqueda.map(autor => <Autor key={autor.ID} post={autor}/>);

    const contenido = resultados?.length ? resultados : <h1>NADA</h1>;
  
    return (
    <main>{contenido}</main>
  )
}

export default ListadoAutores