import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./New.css";
import "./Edit.css";
import Return from "./return.png";
import ProfileIcon from "./profileicon.png";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.changed = this.changed.bind(this);
    this.del = this.del.bind(this);
    this.state = {
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      job: this.props.contact.job,
      email: this.props.contact.email,
      address: this.props.contact.address,
      phoneNumber: this.props.contact.phoneNumber
    };
  }

  del() {
    this.props.del(this.props.contact.id);
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
      this.state.job,
      this.state.email,
      this.state.address,
      this.state.phoneNumber,
      this.props.contact.id
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
        <Link to={"/contacts/" + this.props.contact.id}>
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
        <Link to={"/"}>
          <div className={"delete " + classColor} onClick={this.del}>
            Delete Contact
          </div>
        </Link>
      </div>
    );
  }
}

export default Edit;
