import React, { Component } from "react";
import "./Seedbox.css";

class Seedbox extends Component {
  constructor(props) {
    super(props);
    this.more = this.more.bind(this);
    this.onClick = this.onClick.bind(this);
    this.edit = this.edit.bind(this);
    this.changed = this.changed.bind(this);
    this.del = this.del.bind(this);
    this.state = {
      more: false,
      times: this.props.seed.time,
      target: this.props.seed.aim
    };
  }

  more() {
    this.setState({
      more: !this.state.more
    });
  }

  edit() {
    this.more();
    this.props.edit(
      this.props.seed.id,
      this.state.times,
      this.state.target,
      "seed"
    );
  }

  onClick() {
    this.props.onClick(this.props.seed.id);
  }

  changed(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  del() {
    this.props.del(this.props.seed.id, "seed");
  }

  render() {
    let classes = "Seedbox";
    if (this.props.selected) {
      classes += " selected";
    }
    return (
      <div className={classes}>
        <div onClick={this.onClick}>
          <span className="name">{this.props.seed.name}</span>
          {this.props.selected === false &&
            (this.props.seed.day >= this.props.seed.aim ? (
              <span className="progress">Done!</span>
            ) : (
              <span className="progress">
                {this.props.seed.day}d/{this.props.seed.aim}d
              </span>
            ))}
          {this.props.selected &&
            (this.state.more ? (
              <span className="progress selected" onClick={this.edit}>
                less
              </span>
            ) : (
              <span className="progress selected" onClick={this.more}>
                more
              </span>
            ))}
        </div>
        {this.state.more && (
          <div className="editbox">
            <span className="edit">Target:</span>
            <input
              name="times"
              value={this.state.times}
              onChange={this.changed}
              className="edit input"
              placeholder={this.props.seed.time}
            />
            <span className="edit">times/</span>
            <input
              name="target"
              value={this.state.target}
              onChange={this.changed}
              className="edit input"
              placeholder={this.props.seed.aim}
            />
            <span className="edit">days</span>
            <span className="edit delete" onClick={this.del}>
              Delete
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Seedbox;
