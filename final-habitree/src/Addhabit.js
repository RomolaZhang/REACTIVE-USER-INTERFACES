import React, { Component } from "react";
import "./Addhabit.css";
import Addoption from "./Addoption";

class Addhabit extends Component {
  constructor(props) {
    super(props);
    this.changed = this.changed.bind(this);
    this.cate = this.cate.bind(this);
    this.save = this.save.bind(this);
    this.state = {
      name: "",
      target: "",
      times: "",
      active: "d"
    };
  }

  save() {
    this.props.save(
      this.state.name,
      this.state.target,
      this.state.times,
      this.state.active
    );
  }

  changed(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cate(label) {
    if (label === "Daily Seed") {
      this.setState({
        active: "d"
      });
    } else {
      this.setState({
        active: "h"
      });
    }
  }

  render() {
    return (
      <div className="addHabit">
        <div className="headingHabit">Add Habit</div>
        <div className="category">
          <Addoption
            label="Daily Seed"
            onClick={this.cate}
            active={this.state.active === "d"}
          />
          <Addoption
            label="Long-term Goal"
            onClick={this.cate}
            active={this.state.active === "h"}
          />
        </div>
        <div className="inputfield">
          <span>Name:</span>
          <input
            name="name"
            value={this.state.hours}
            onChange={this.changed}
            className="input"
          />
        </div>
        <div className="inputfield">
          <span>Target:</span>
          {this.state.active === "d" && (
            <span>
              <input
                name="times"
                value={this.state.times}
                onChange={this.changed}
                className="input target"
              />
              <span>times/</span>
            </span>
          )}
          <input
            name="target"
            value={this.state.target}
            onChange={this.changed}
            className="input target"
          />
          <span> {this.state.active}</span>
        </div>
        <div className="headingHabit save" onClick={this.save}>
          Save
        </div>
      </div>
    );
  }
}

export default Addhabit;
