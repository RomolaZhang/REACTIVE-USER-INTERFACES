import React, { Component } from "react";
import "./Addoption.css";

class Addhabit extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.label);
  }

  changed(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const classes = this.props.active ? "active" : "inactive";
    return (
      <span className={"cate " + classes} onClick={this.onClick}>
        {this.props.label}
      </span>
    );
  }
}

export default Addhabit;
