import React from "react";
import ReactDOM from "react-dom";

class A extends React.Component {
  componentWillMount() {
    document.body.className = "Warmwind";
  }
  componentWillUnmount() {
    document.body.className = "";
  }
  render() {
    return <div style={{ display: "none" }}> Component A </div>;
  }
}

export default A;
