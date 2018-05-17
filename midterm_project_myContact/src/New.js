import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./New.css";
import Return from "./return.png";
import ProfileIcon from "./profileicon.png";

//I can also edit and delete every contact now!!!!!

class New extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.changed = this.changed.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      job: "",
      phoneNumber: ""
    };
  }

  changed(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  save() {
    this.props.onClick(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.address,
      this.state.job,
      this.state.phoneNumber
    );
  }

  render() {
    const classColor = this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className={"ContactPage " + classColor}>
        <div className="return">
          <Link to={"/"}>
            <img className={"return " + classColor} src={Return} />
          </Link>
        </div>
        <Link to="/">
          <div onClick={this.save} className={"save " + classColor}>
            Save
          </div>
        </Link>

        <div className={"line " + classColor} />
        <div className={"circleimg " + classColor} />
        <img className="img" src={ProfileIcon} />
        <div className={"inputname " + classColor}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.changed}
            placeholder="first name"
            className={"bigname firstname " + classColor}
          />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.changed}
            placeholder="last name"
            className={"bigname lastname " + classColor}
          />
        </div>
        <input
          name="job"
          value={this.state.job}
          onChange={this.changed}
          className={"job " + classColor}
        />
        <div className={"property " + classColor}>email</div>
        <input
          name="email"
          value={this.state.email}
          onChange={this.changed}
          className={"content " + classColor}
        />
        <div className={"property " + classColor}>address</div>
        <input
          name="address"
          value={this.state.address}
          onChange={this.changed}
          className={"content " + classColor}
        />
        <div className={"property " + classColor}>phone number</div>
        <input
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.changed}
          className={"content " + classColor}
        />
        <div className={"property notes " + classColor}>notes</div>
      </div>
    );
  }
}

export default New;
