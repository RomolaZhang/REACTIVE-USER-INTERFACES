import React, { Component } from "react";
import "./App.css";
import tag from "./tag.png";
import moreIcon from "./more icon@3x.png";
import addIcon from "./add icon@3x.png";
import LetterButton from "./LetterButton";

// var letters = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);

    this.state = {
      sort: "asc",
      search: "",
      contacts: [
        { name: "Romola Zhang", email: "cz1302@nyu.edu" },
        { name: "Chenchen Zhou", email: "cz1317@nyu.edu" },
        { name: "Mary Zhang", email: "hz1337@nyu.edu" },
        { name: "Demi Li", email: "yl4121@nyu.edu" },
        { name: "Skye Chen", email: "zh969@nyu.edu" },
        { name: "Leah Dou", email: "wd622@nyu.edu" },
        { name: "Carol Chen", email: "mc6251@nyu.edu" },
        { name: "Jiayu Han", email: "jh5270@nyu.edu" },
        { name: "Yuling Jin", email: "yj1077@nyu.edu" },
        { name: "Harry Wang", email: "zw1154@nyu.edu" },
        { name: "Moon", email: "jh.moon@nyu.edu" },
        { name: "Alicia Luo", email: "tl2180@nyu.edu" },
        { name: "Grace Gao", email: "zg650@nyu.edu" },
        { name: "Ann Chen", email: "hhc285@nyu.edu" },
        { name: "Ariel Wang", email: "ariel.wang.nyu.edu" },
        { name: "Osborn Chen", email: "jc7483@nyu.edu" },
        { name: "Billy Zou", email: "yz3352@nyu.edu" },
        { name: "Shiny Wu", email: "syw297@nyu.edu" },
        { name: "Cyndi Jia", email: "yj1081@nyu.edu" },
        { name: "Quinn He", email: "fh805@nyu.edu" },
        { name: "Amber Lin", email: "ytl304@nyu.edu" },
        { name: "Phyllis Fei", email: "zf534@nyu.edu" }
      ]
    };
  }

  ascending() {
    this.setState({
      sort: "asc"
    });
  }

  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    let arrCopy = this.state.contacts.slice();

    if (this.state.onSearch !== "") {
      arrCopy = this.state.contacts.filter(contact => {
        const input = this.state.search.toLowerCase();
        const name = contact.name.toLowerCase();
        return name.match(input);
      });
    }

    if (this.state.sort === "asc") {
      arrCopy = arrCopy.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }

    const contactNum = arrCopy.length;
    const letters = [];
    let label = "A";

    const contacts = arrCopy.map((contact, i) => {
      label = contact.name[0].toUpperCase();

      if (!letters.includes(label)) {
        letters.push(label);
      }

      return (
        <div key={i} className="bunch">
          <div className="anchor" id={label} />
          <div className="contact">
            <div className="name">{contact.name}</div>
            <div className="email">{contact.email}</div>
          </div>
        </div>
      );
    });

    const letterButtons = letters.map((letter, i) => {
      const label = "#" + letter;
      //return <LetterButton key={i} name={letter} onClick={this.letterButton} />;
      return (
        <a className="letterButtons" href={label} key={i}>
          {letter}
        </a>
      );
    });

    return (
      <div className="App">
        <div className="topBar">
          <figure>
            <img className="moreIcon" src={moreIcon} />
          </figure>
          <p> All Contacts </p>
          <figure>
            <img className="addIcon" src={addIcon} />
          </figure>
        </div>
        <div className="blackspace" />
        <div className="searchLine">
          <input
            className="searchBar"
            placeholder="Search in All Contacts"
            onChange={this.onSearch}
          />
          <img className="tag" src={tag} />
        </div>
        <div className="main">
          <div className="contacts">
            {contacts}
            <div className="contactNum">{contactNum} contacts</div>
          </div>
          <div className="sideBar">#{letterButtons}</div>
        </div>
      </div>
    );
  }
}

export default App;
