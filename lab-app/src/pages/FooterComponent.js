import React, { Component } from "react";
import phone from "../img/Phone.png";

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
        <div className="imgFooter">
          <img src={phone}></img>
          <img src={phone}></img>
          <img src={phone}></img>
        </div>
        <ul className="divFooter">
          <a className="link">{this.props.first}</a>
          <a className="link">{this.props.second}</a>
          <a className="link">{this.props.third}</a>
          <a className="link">{this.props.forth}</a>
        </ul>
      </div>
    );
  }
}
