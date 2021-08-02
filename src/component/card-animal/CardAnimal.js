import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function CardAnimal(params) {
  return (
    <div className="card-mas-info">
      <div className="card-header">
        <h2>{params.animal.nombre}</h2>
      </div>
      <div className="card-body">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${params.animal.img})`,
          }}
        ></div>
        <div className="card-description">
          <p>
            Tipo de animal: <span>{params.animal.tipo}</span>
          </p>
          <p>
            Raza del animal: <span>{params.animal.raza}</span>
          </p>
          <p>
            Edad del animal: <span>{params.animal.edad}</span>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <Link className="btn btn-prymary" to="/">
          Volver
        </Link>
      </div>
    </div>
  );
}
export default CardAnimal;
