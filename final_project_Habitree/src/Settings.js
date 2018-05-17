import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";

class Habits extends Component {
  render() {
    return (
      <div className="Settings">
        <header>Settings</header>
        <div className="contents indi">Sign Up</div>
        <div className="contents indi upgrade">Upgrade</div>
        <div className="group">
          <div className="contents">Sounds</div>
          <div className="contents">Reminder</div>
          <div className="contents">Privacy</div>
          <div className="contents">Review us</div>
        </div>
        <div className="nav">
          <Link to="/" className="navbutton">
            Today
          </Link>
          <Link to="/habits" className="navbutton">
            Habits
          </Link>
          <Link to="/settings" className="navbutton on">
            Settings
          </Link>
        </div>
      </div>
    );
  }
}

export default Habits;
