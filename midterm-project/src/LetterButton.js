import React, { Component } from "react";
import "./LetterButton.css";

class LetterButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <div className="LetterButton">
        <button onClick={this.onClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default LetterButton;
