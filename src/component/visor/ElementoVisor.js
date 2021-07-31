import React, { Component } from "react";
import "./styles.css";

class ElementoVisor extends Component {
  render() {
    const { nombre, tipo, raza, edad, img } = this.props;
    return (
      <div className="elemento-container">
        <div
          className="imagen-elemento"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <h4>{nombre}</h4>
        <p>{tipo}</p>
        <p>{raza}</p>
        <p>{edad}</p>
      </div>
    );
  }
}
export default ElementoVisor;
