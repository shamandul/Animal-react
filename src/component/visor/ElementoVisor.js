import React, { Component } from "react";
import "./styles.css";

class ElementoVisor extends Component {
  mostrarInfo(id) {
    console.log(id);
  }
  mostrarInfo = this.mostrarInfo.bind(this);
  render() {
    const { id, nombre, tipo, raza, edad, img } = this.props;

    return (
      <div className="elemento-container">
        <div
          className="imagen-elemento"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <h2>{nombre}</h2>
        <ul>
          <li>Tipo: {tipo}</li>
          <li>Raza: {raza}</li>
          <li>Edad: {edad}</li>
        </ul>
        <button
          className="btn btn-prymary"
          onClick={(e) => this.mostrarInfo(id, e)}
        >
          Más información
        </button>
      </div>
    );
  }
}
export default ElementoVisor;
