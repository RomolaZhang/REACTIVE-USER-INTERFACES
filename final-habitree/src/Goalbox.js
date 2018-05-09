import React, { Component } from "react";

class Goalbox extends Component {
  constructor(props) {
    super(props);
    this.more = this.more.bind(this);
    this.onClick = this.onClick.bind(this);
    this.edit = this.edit.bind(this);
    this.changed = this.changed.bind(this);
    this.del = this.del.bind(this);
    this.state = {
      more: false,
      target: this.props.goal.aim
    };
  }

  more() {
    this.setState({
      more: !this.state.more
    });
  }

  edit() {
    this.more();
    this.props.edit(this.props.goal.id, 0, this.state.target, "goal");
  }

  onClick() {
    this.props.onClick(this.props.goal.id);
  }

  changed(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  del() {
    this.props.del(this.props.goal.id, "goal");
  }

  render() {
    let classes = "Seedbox";
    if (this.props.selected) {
      classes += " selected";
    }
    return (
      <div className={classes}>
        <div onClick={this.onClick}>
          <span className="name">{this.props.goal.name}</span>
          {this.props.selected === false &&
            (this.props.goal.completed >= this.props.goal.aim ? (
              <span className="progress">Done!</span>
            ) : (
              <span className="progress">
                {this.props.goal.completed}h/{this.props.goal.aim}h
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
              name="target"
              value={this.state.target}
              onChange={this.changed}
              className="edit input"
              placeholder={this.props.goal.aim}
            />
            <span className="edit">hours</span>
            <span className="edit delete" onClick={this.del}>
              Delete
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Goalbox;
