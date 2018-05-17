import React, { Component } from "react";
import "./Goal.css";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.addTime(this.props.goal.id);
  }

  render() {
    return (
      <span className="Seed" onClick={this.onClick}>
        <div className="seedname">
          <span>{this.props.goal.name}</span>
        </div>
      </span>
    );
  }
}

export default Goal;
