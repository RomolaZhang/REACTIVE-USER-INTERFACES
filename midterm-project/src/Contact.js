import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="anchor" id={this.props.label} />
        <div className="contact">
          <div className="name">{this.props.name}</div>
          <div className="detail">{this.props.email}</div>
          <div className="detail">{this.props.address}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
