import React, { Component } from "react";
import "./Option.css";

class Option extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.label);
  }

  render() {
    let classes = "Option";
    if (this.props.selected) {
      classes += " active";
    }
    return (
      <div className={classes} onClick={this.onClick}>
        {this.props.text}
      </div>
    );
  }
}

export default Option;
