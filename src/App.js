import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Services from "./components/services";
import Products from "./components/products";
import Media from "./components/media";
import Footer from "./components/footer";
import Contactus from "./components/contactus";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Services />
      <Products />
      <Media />
      <Contactus />
      <Footer />
    </React.Fragment>
  );
}

export default App;
