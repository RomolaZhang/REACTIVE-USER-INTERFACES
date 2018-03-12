import React, { Component } from "react";
import "./LetterButtons.css";

class LetterButtons extends Component {
  render() {
    const classColor = this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className="LetterButtons">
        <a
          className={"letterButtons " + classColor + "-letterButtons"}
          href={this.props.label}
        >
          {this.props.letter}
        </a>
      </div>
    );
  }
}

export default LetterButtons;
