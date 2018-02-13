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

    const data = ["First Button","Second Button","Third Button"];

    const buttons = data.map((button) => {
    return <Button selected = {this.state.selected === button} label = {button} onClick = {this.buttonClicked} />
  });

    return (
      <div className="App">
          {buttons}
          <DisplayBox displayContent = {this.state.content} />
      </div>
    );
  }
}

export default App;
