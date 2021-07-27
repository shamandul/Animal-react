import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    const { title, subtitle, img } = this.props;
    return (
      <div
        className="header-container"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="text">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>
      </div>
    );
  }
}
export default Header;
