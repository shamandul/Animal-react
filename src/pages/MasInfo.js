import React from "react";
import CardAnimal from "../component/card-animal/CardAnimal";

function MasInfo(params) {
  return (
    <React.Fragment>
      <CardAnimal animal={params.location.animal}></CardAnimal>
    </React.Fragment>
  );
}

export default MasInfo;
