import React, { Component } from "react";
import "./styles.css";

class DescripcionEmpresa extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="description-container">
        <div className="text">
          <h1>{title}</h1>
        </div>
        <div className="desc-emp">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default DescripcionEmpresa;
