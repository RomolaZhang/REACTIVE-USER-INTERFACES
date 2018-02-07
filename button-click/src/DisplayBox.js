import React, { Component } from 'react';
import './DisplayBox.css';

class DisplayBox extends Component {
  render() {
    return (
      <div className = "DisplayBox">{this.props.displayContent}</div>
    );
  }
}

export default DisplayBox;
