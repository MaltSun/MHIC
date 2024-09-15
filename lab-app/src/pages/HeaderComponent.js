import React, { Component } from "react";
import Logo from "../img/Logo.png";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="header ">
        <img className="disappearSecond" src={Logo}></img>
        <div className="list">
          <p className="listA">{this.props.first}</p>
          <p className="listA">{this.props.second}</p>
          <p className="listA">{this.props.third}</p>
        </div>
      </div>
    );
  }
}
