import React from "react";

class B extends React.Component {
  componentWillMount() {
    document.body.className = "Darkfusion";
  }
  componentWillUnmount() {}
  render() {
    return <div style={{ display: "none" }}> Component B </div>;
  }
}

export default B;
