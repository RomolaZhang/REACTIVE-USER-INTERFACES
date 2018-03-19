import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { name: "Person1", email: "first@person.com" },
        { name: "Person2", email: "second@person.com" },
        { name: "Person3", email: "third@person.com" }
      ]
    };

    this.add = this.add.bind(this);
  }

  add(name, email) {
    let copy = this.state.contacts.slice();
    copy.push({
      name: name,
      email: email
    });

    this.setState({
      contacts: copy
    });
  }

  render() {
    const list = this.state.contacts.map(p => (
      <div key={p.email} className="block">
        <div className="name">{p.name}</div>
        <div className="email">{p.email}</div>
      </div>
    ));

    return (
      <div className="App">
        <h1> List </h1>
        {list}
        <Form onClick={this.add} />
      </div>
    );
  }
}

export default App;
