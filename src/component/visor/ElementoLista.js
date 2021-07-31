import React from "react";
import ElementoVisor from "./ElementoVisor";

function ElementoLista(props) {
  return (
    <React.Fragment>
      {props.elementos.map((a) => {
        return (
          <ElementoVisor
            id={a.id}
            key={a.id}
            nombre={a.nombre}
            tipo={a.tipo}
            raza={a.raza}
            edad={a.edad}
            img={a.img}
          />
        );
      })}
    </React.Fragment>
  );
}

export default ElementoLista;
