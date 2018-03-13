import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.selected) {
      this.props.removeFilter(this.props.text);
    } else {
      this.props.addFilter(this.props.text);
    }
  }

  render() {
    let classes = "Filter ";
    if (this.props.selected) {
      classes += "active ";
    }

    classes += this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className={classes} onClick={this.onClick}>
        {this.props.text}
      </div>
    );
  }
}

export default Filter;
