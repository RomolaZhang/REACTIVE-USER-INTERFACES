import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import DisplayBox from './DisplayBox'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selected : null ,
      content : "You have selected: "
    }
    
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(p){

    this.setState({
      selected : p,
      content : "You have selected: " + p
    });
  }


  render() {

    const isButton1 = this.state.selected === "First Button";
    const isButton2 = this.state.selected === "Second Button";
    const isButton3 = this.state.selected === "Third Button";

    return (
      <div className="App">
          <Button selected = {isButton1} label = "First Button" onClick = {this.buttonClicked} />
          <Button selected = {isButton2} label = "Second Button" onClick = {this.buttonClicked} />
          <Button selected = {isButton3} label = "Third Button" onClick = {this.buttonClicked} />
          <DisplayBox displayContent = {this.state.content} />
      </div>
    );
  }
}

export default App;
