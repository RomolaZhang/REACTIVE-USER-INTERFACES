import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(){
    this.props.onClick(this.props.label);
  }

  render() {
    let classes = 'Button';
    
    if(this.props.selected){
      classes += ' active';
    }

    return (
      <div className = {classes} onClick = {this.buttonClicked} >{this.props.label}</div>
    );
  }
}

export default Button;
