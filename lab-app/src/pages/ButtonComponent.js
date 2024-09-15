import React, { Component } from "react";

export default class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button className="button">{this.props.information}</button>
      </div>
    )
  }
}
