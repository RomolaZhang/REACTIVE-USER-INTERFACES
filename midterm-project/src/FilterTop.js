import React, { Component } from "react";
import "./FilterTop.css";

class FilterTop extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.label);
  }

  render() {
    let classes = "filterTops ";
    classes += this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className={classes} onClick={this.onClick}>
        {this.props.label}
      </div>
    );
  }
}

export default FilterTop;
