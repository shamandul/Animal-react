import React, { Component } from "react";
import "./styles.css";

class ElementoVisor extends Component {
  render() {
    const { title, description, img } = this.props;
    return (
      <div className="header-container">
        <div
          className="imagen-elemento"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  }
}
export default ElementoVisor;
