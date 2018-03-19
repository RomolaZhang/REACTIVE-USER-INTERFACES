import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };

    this.clicked = this.clicked.bind(this);
    this.changed = this.changed.bind(this);
  }

  clicked() {
    this.props.onClick(this.state.name, this.state.email);
    this.setState({
      name: "",
      email: ""
    });
  }

  changed(e) {
    this.setState({
      [e.target.className]: e.target.value
    });
  }

  render() {
    return (
      <div className="Form">
        <input
          className="name"
          value={this.state.name}
          onChange={this.changed}
          placeholder="name"
        />
        <input
          className="email"
          value={this.state.email}
          onChange={this.changed}
          placeholder="email"
        />
        <button onClick={this.clicked}> Submit </button>
      </div>
    );
  }
}

export default Form;
