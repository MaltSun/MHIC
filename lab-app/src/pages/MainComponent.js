import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";
import mainPhoto from "../img/MainPhoto.png"; 
export default class MainComponent extends Component {
  render() {
    return (
      <div className="mainBlock">
        <div>
          <h1 className="mainH1">Fresh pastry kits</h1>
          <p className="mainP">
            Bringing the smells and tastes of your favourite patisserie to your
            home. Our kits have everything you need to easily make killer
            pastries every time. We’ve done ou need to do is roll, proof and
            bake!
          </p>
          <ButtonComponent information="Catalog" />
        </div>
        <img className="disappear" src={mainPhoto}></img>
      </div>
    );
  }
}
