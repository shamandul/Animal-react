import React, { useState, useEffect } from "react";
import ElementoLista from "./ElementoLista";
import "./styles.css";

function Visor(props) {
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    obtenerAnimales();
  }, []);

  const obtenerAnimales = async () => {
    await fetch("animales.json", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((res) => res.json())
      .then((dato) => setAnimal(dato));
  };

  return (
    <div className="visor-container">
      <ElementoLista elementos={animal} />
    </div>
  );
}

export default Visor;
