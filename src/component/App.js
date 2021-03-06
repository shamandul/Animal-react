import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "../pages/index";
import MasInfo from "../pages/MasInfo";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Index} />
      <Route path="/mas-info" component={MasInfo} />
      {/*    <Route exact path="/servicios" component={ Servicios }/>
          <Route exact path="/servicios/asesoramiento" component={ Asesoramiento }/>
          <Route exact path="/se'rvicios/proyectos" component={ Proyectos }/>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/contacto" component={ Contacto }/> */}
    </BrowserRouter>
  );
}
export default App;
