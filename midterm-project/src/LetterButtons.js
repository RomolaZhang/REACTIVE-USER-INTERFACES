import React, { Component } from "react";
import "./LetterButtons.css";

class LetterButtons extends Component {
  render() {
    return (
      <div className="LetterButtons">
        <a className="letterButtons" href={this.props.label}>
          {this.props.letter}
        </a>
      </div>
    );
  }
}

export default LetterButtons;
