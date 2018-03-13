import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

class Contact extends Component {
  render() {
    let emailClasses = "detail ";
    let addressClasses = "detail ";
    let phoneNumberClasses = "detail ";

    const classColor = this.props.colorStyle.replace(/\s/g, "");

    if (!this.props.emailState) {
      emailClasses += " hide ";
    }

    if (!this.props.addressState) {
      addressClasses += " hide ";
    }

    if (!this.props.phoneNumberState) {
      phoneNumberClasses += " hide ";
    }

    return (
      <div className="Contact">
        <div className="anchor" id={this.props.label} />
        <Link to={"/contacts/" + this.props.id}>
          <div className={"contact " + classColor}>
            <div className={"name " + classColor}>{this.props.name}</div>
            <div className={emailClasses + classColor}>{this.props.email}</div>
            <div className={addressClasses + classColor}>
              {this.props.address}
            </div>
            <div className={phoneNumberClasses + classColor}>
              {this.props.phoneNumber}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Contact;
