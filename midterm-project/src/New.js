import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./New.css";
import Return from "./return.png";
import ProfileIcon from "./profileicon.png";

class New extends Component {
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
        <img className="img" src={ProfileIcon} />
        <input className={"bigname " + classColor} />
        <div className={"property " + classColor}>email</div>
        <input className={"content " + classColor} />
        <div className={"property " + classColor}>address</div>
        <input className={"content " + classColor} />
        <div className={"property " + classColor}>phone number</div>
        <input className={"content " + classColor} />
        <div className={"property notes " + classColor}>notes</div>
      </div>
    );
  }
}

export default New;
