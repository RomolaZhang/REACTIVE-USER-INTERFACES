import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let txt = e.target.value;
    this.props.onChange(this.props.label, txt);
  }

  render() {
    return (
      <div className="Input">
        <div className="label">{this.props.label}</div>
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }
}

export default Input;
