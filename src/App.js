import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
