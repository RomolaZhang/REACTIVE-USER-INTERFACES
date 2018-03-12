import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
import Return from "./return.png";

class ContactPage extends Component {
  render() {
    const classColor = this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className={"ContactPage " + classColor}>
        <div className="return">
          <Link to={"/"}>
            <img className={"return " + classColor} src={Return} />
          </Link>
        </div>
        <div className={"line " + classColor} />
        <div className={"circleimg " + classColor} />
        <div className={"bigname " + classColor}>{this.props.contact.name}</div>
        <div className={"job " + classColor}>{this.props.contact.job}</div>
        <div className={"property " + classColor}>email</div>
        <div className={"content " + classColor}>
          {this.props.contact.email}
        </div>
        <div className={"property " + classColor}>address</div>
        <div className={"content " + classColor}>
          {this.props.contact.address}
        </div>
        <div className={"property " + classColor}>phone number</div>
        <div className={"content " + classColor}>
          {this.props.contact.phoneNumber}
        </div>
        <div className={"property notes " + classColor}>notes</div>
      </div>
    );
  }
}

export default ContactPage;
