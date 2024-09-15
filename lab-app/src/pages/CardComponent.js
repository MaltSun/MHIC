import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";
export default class CardComponent extends Component {
  render() {
    return (
      <div className="card disappearSecond">
        <img src={this.props.image}></img>
        <h3>{this.props.bunName}</h3>
        <p>{this.props.bunPrice}</p>
        <ButtonComponent information="Information" />
      </div>
    );
  }
}
