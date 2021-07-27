import React from "react";
import ElementoVisor from "./ElementoVisor";

function ElementoLista(props) {
  return (
    <React.Fragment>
      {this.props.elementos.map((elemento) => {
        return (
          <ElementoVisor
            id={elemento.id}
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            img={elemento.img}
          />
        );
      })}
    </React.Fragment>
  );
}

export default ElementoVisor;
