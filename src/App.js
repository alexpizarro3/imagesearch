import React, { Component } from 'react';
import Buscador from "./componentes/Buscador";
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'end');
  }

  paginaAnterior = () => {
    //tener el state de la pagina actual
      let pagina = this.state.pagina;
    //Si la pagina es 1 ya no restes
      if(pagina===1) return null;
    //Restar 1 a la pagina actual
      pagina --;
    //agregar el cambio
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      });
    console.log(pagina);
  }

  paginaSiguiente = () => {
    //tener el state de la pagina actual
      let pagina = this.state.pagina;
    //Sumar 1 a la pagina actual
      pagina ++;
    //agregar el cambio
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      });
    console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina= this.state.pagina;
    const url = `https://pixabay.com/api/?key=26944772-b77b13b8fb5af22c750dda077&q=${termino}&per_page=30&page=${pagina}`; //Direccion de busqueda
    console.log(url);
    //Leer el Json

    if(termino === "") {
      this.setState({
        imagenes: []
      })
    }
    else {
      fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits}))
    }
    

  }
  //reacciona a lo que se escribe en el input y llena termino con ese valor
  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
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
        <div class="row">
          <div class="justify-content-center text-center">
             <Resultado
                  imagenes={this.state.imagenes}
                  paginaSiguiente={this.paginaSiguiente}
                  paginaAnterior={this.paginaAnterior}
              />
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
