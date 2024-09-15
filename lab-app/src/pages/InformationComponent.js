import React, { Component } from "react";
import CardComponent from "./CardComponent";
import almondCroissantImage from "../img/almondCroissant.png";
import raspberryDanishImage from "../img/raspberryDanish.png";
import painAuxRaisinsImage from "../img/painAuxRaisins.png";
import pieAuChocolateImage from "../img/pieAuChocolate.png";

export default class InformationComponent extends Component {
  render() {
    return (
      <div className="informationSection">
        <h1>Shop pastry kits</h1>
        <div className="cards">
          <CardComponent
            className="card"
            bunName="ALL-BUTTER CROISSANT"
            bunPrice="KIT OF 6 - 13.50"
            image={pieAuChocolateImage}
          />
          <CardComponent
            bunName="ALMOND CROISSANT"
            bunPrice="KIT OF 6 - 13.50"
            image={almondCroissantImage}
          />
          <CardComponent
            bunName="RASPBERRY DANISH"
            bunPrice="KIT OF 6 - 12.50"
            image={raspberryDanishImage}
          />
          <CardComponent
            bunName="PAIN AUX RASINS"
            bunPrice="KIT OF 6 - 14.50"
            image={painAuxRaisinsImage}
          />
          <CardComponent
            bunName="APRICOT DANISH"
            bunPrice="KIT OF 5- 13.50"
            image={pieAuChocolateImage}
          />
          <CardComponent
            bunName="PI AU CHOCOLATE"
            bunPrice="KIT OF 6 - 13.50"
            image={almondCroissantImage}
          />
        </div>
      </div>
    );
  }
}
