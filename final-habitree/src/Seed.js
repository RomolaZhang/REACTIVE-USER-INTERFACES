import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./Seed.css";

class Seed extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.adding = this.adding.bind(this);
    this.substract = this.substract.bind(this);
    this.change = this.change.bind(this);

    this.state = {
      change: false
    };
  }

  onClick() {
    if (this.props.seed.time === 1) {
      this.props.toggling(this.props.seed.id);
    } else {
      this.change();
    }
  }

  change() {
    this.setState({
      change: !this.state.change
    });
  }

  adding() {
    this.props.adding(this.props.seed.id);
    this.change();
  }

  substract() {
    this.props.substract(this.props.seed.id);
    this.change();
  }

  render() {
    const remained = this.props.seed.time - this.props.seed.completed;
    let classes = "Seed";
    if (remained === 0) {
      classes += " done";
    }

    return (
      <span className={classes} onClick={this.onClick}>
        <div className="seedname">
          <span>{this.props.seed.name}</span>
        </div>
        {this.props.seed.time !== 1 &&
          remained !== 0 && (
            <div className="seedtime">
              <span>{remained}</span>
            </div>
          )}
        <CSSTransition
          in={this.state.change}
          timeout={300}
          classNames="change"
          unmountOnExit
        >
          <div className="change">
            <div className="changeicon">
              <span className="changeIcon" onClick={this.adding}>
                +
              </span>
            </div>
            <div className="changeicon">
              <span className="changeIcon" onClick={this.substract}>
                --
              </span>
            </div>
          </div>
        </CSSTransition>
      </span>
    );
  }
}

export default Seed;
