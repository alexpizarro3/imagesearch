import React, { Component } from 'react';
import Buscador from "./componentes/Buscador";

class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=26944772-b77b13b8fb5af22c750dda077&q=${termino}&per_page=30`; //Direccion de busqueda
    // muestra la direccion de busqueda en consola console.log(url);
    //Leer el Json
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits}))

  }
  //reacciona a lo que se escribe en el input y llena termino con ese valor
  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() { 
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
  
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        
      </div>
    );
  }
}
 
export default App;
