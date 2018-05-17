import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: "IMA SPRING SHOW 2018",
      location: "NYU Shanghai, 9th floor",
      time: "May 11th, 5pm - 7pm"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(label, txt) {
    if (label === "Event name") {
      this.setState({
        eventName: txt
      });
    } else if (label === "Location") {
      this.setState({
        location: txt
      });
    } else if (label === "Time") {
      this.setState({
        time: txt
      });
    }
  }

  render() {
    const data = ["Event name", "Location", "Time"];

    const inputs = data.map(input => {
      return <Input label={input} onChange={this.onChange} />;
    });

    const display = [
      {
        className: "EventName",
        content: this.state.eventName
      },
      {
        className: "Location",
        content: this.state.location
      },
      {
        className: "Time",
        content: this.state.time
      }
    ];

    const displays = display.map(display => {
      return (
        <Display className={display.className} content={display.content} />
      );
    });

    return (
      <div className="App">
        <div className="inputs">{inputs}</div>
        <div className="displays">{displays}</div>
      </div>
    );
  }
}

export default App;
