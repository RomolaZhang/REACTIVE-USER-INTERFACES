import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <div className={this.props.className}>{this.props.content}</div>
      </div>
    );
  }
}

export default Display;
