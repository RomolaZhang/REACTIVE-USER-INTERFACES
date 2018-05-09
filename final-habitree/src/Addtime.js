import React, { Component } from "react";
import "./Addtime.css";

class Addtime extends Component {
  constructor(props) {
    super(props);
    this.savetime = this.savetime.bind(this);
    this.changed = this.changed.bind(this);
    this.state = {
      hours: 0
    };
  }

  changed(e) {
    this.setState({
      hours: e.target.value
    });
  }

  savetime() {
    this.props.savetime(this.props.goal.id, this.state.hours);
  }

  render() {
    return (
      <div className="Addtime">
        <div className="heading">Add Time</div>
        <div className="addbox">
          <span className="flexchild">{this.props.goal.name}</span>
          <span className="flexadd">+</span>
          <span className="flexchild">
            <input
              className="inputTime"
              value={this.state.hours}
              onChange={this.changed}
            />
            h
          </span>
        </div>
        <div className="heading save" onClick={this.savetime}>
          Save
        </div>
      </div>
    );
  }
}

export default Addtime;
