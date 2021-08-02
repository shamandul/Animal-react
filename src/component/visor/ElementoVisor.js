import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Link
          className="btn btn-prymary"
          to={{
            pathname: "/mas-info",
            animal: { id, nombre, tipo, raza, edad, img },
          }}
        >
          Más información
        </Link>
        {/* <Link className="btn btn-prymary" to={`/mas-info/${id}`}>
          Más información
        </Link> */}
      </div>
    );
  }
}
export default ElementoVisor;
