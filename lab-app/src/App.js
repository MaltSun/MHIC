import React from "react";

import HeaderComponent from "./pages/HeaderComponent";
import FooterComponent from "./pages/FooterComponent";
import MainComponent from "./pages/MainComponent";
import InformationComponent from "./pages/InformationComponent";
import "./style.css";

function App() {
  return (
    <div div className="App">
      <HeaderComponent
        className="header"
        first="shop"
        second="how it work"
        third="whi is tarla"
      />
      <MainComponent/>
      <InformationComponent />
      <FooterComponent
        first="FAQ"
        second="Information"
        third="Location"
        forth="Catalog"
      />
    </div>
  );
}

export default App;
