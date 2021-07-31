import React, { Component } from "react";
import Header from "../component/header/Header";
import imagen from "../assets/gatos.jpg";
import DescripcionEmpresa from "../component/descripcion-empresa/desc-emp";
import Visor from "../component/visor/Visor";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          title="Animal-React"
          subtitle="Bienvenidos a nuestra web"
          img={imagen}
        ></Header>
        <DescripcionEmpresa
          title="Centro Municipal de Protección Animal"
          description="El servicio municipal de protección animal del Ayuntamiento combina
        la recogida de animales abandonados o perdidos en el término
        municipal con la reubicación de los mismos a través de la adopción
        en caso de que nadie se haga cargo de ellos en el tiempo."
        ></DescripcionEmpresa>
        <Visor />
      </React.Fragment>
    );
  }
}
export default Index;
