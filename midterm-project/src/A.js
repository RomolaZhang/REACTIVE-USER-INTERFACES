import React from "react";

class A extends React.Component {
  componentWillMount() {
    document.body.className = "Warmwind";
  }
  componentWillUnmount() {}
  render() {
    return <div style={{ display: "none" }}> Component A </div>;
  }
}

export default A;
