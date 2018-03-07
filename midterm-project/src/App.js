import React, { Component } from "react";
import "./App.css";
import tag from "./tag.png";
import addIcon from "./add icon@3x.png";
import moreIcon from "./more icon@3x.png";
import Contact from "./Contact";
import LetterButtons from "./LetterButtons";
import Option from "./Option";

// var letters = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.options = this.options.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
    this.previewing = this.previewing.bind(this);
    this.sorting = this.sorting.bind(this);
    this.colorstyling = this.colorstyling.bind(this);
    this.adding = this.adding.bind(this);

    this.state = {
      search: "",
      options: false,
      email: true,
      address: false,
      phoneNumber: false,
      sorting: "First name",
      colorStyle: "Clean Air",
      contacts: [
        {
          name: "Romola Zhang",
          email: "cz1302@nyu.edu",
          address: "NYU Shanghai"
        },
        {
          name: "Chenchen Zhou",
          email: "cz1317@nyu.edu",
          address: "NYU Shanghai"
        },
        {
          name: "Mary Zhang",
          email: "hz1337@nyu.edu",
          address: "NYU Shanghai"
        },
        { name: "Demi Li", email: "yl4121@nyu.edu", address: "NYU Shanghai" },
        { name: "Skye Chen", email: "zh969@nyu.edu", address: "NYU Shanghai" },
        { name: "Leah Dou", email: "wd622@nyu.edu", address: "NYU Shanghai" },
        {
          name: "Carol Chen",
          email: "mc6251@nyu.edu",
          address: "NYU Shanghai"
        },
        { name: "Jiayu Han", email: "jh5270@nyu.edu", address: "NYU Shanghai" },
        {
          name: "Yuling Jin",
          email: "yj1077@nyu.edu",
          address: "NYU Shanghai"
        },
        {
          name: "Harry Wang",
          email: "zw1154@nyu.edu",
          address: "NYU Shanghai"
        },
        { name: "JH Moon", email: "jh.moon@nyu.edu", address: "NYU Shanghai" },
        {
          name: "Alicia Luo",
          email: "tl2180@nyu.edu",
          address: "NYU Shanghai"
        },
        { name: "Grace Gao", email: "zg650@nyu.edu", address: "NYU Shanghai" },
        { name: "Ann Chen", email: "hhc285@nyu.edu", address: "NYU Shanghai" },
        {
          name: "Ariel Wang",
          email: "ariel.wang.nyu.edu",
          address: "NYU Shanghai"
        },
        {
          name: "Osborn Chen",
          email: "jc7483@nyu.edu",
          address: "NYU Shanghai"
        },
        { name: "Billy Zou", email: "yz3352@nyu.edu", address: "NYU Shanghai" },
        { name: "Shiny Wu", email: "syw297@nyu.edu", address: "NYU Shanghai" },
        { name: "Cyndi Jia", email: "yj1081@nyu.edu", address: "NYU Shanghai" },
        { name: "Quinn He", email: "fh805@nyu.edu", address: "NYU Shanghai" },
        { name: "Amber Lin", email: "ytl304@nyu.edu", address: "NYU Shanghai" },
        { name: "Phyllis Fei", email: "zf534@nyu.edu", address: "NYU Shanghai" }
      ]
    };
  }

  options() {
    this.setState({
      options: true
    });
  }

  hideOptions() {
    this.setState({
      options: false
    });
  }

  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  previewing(label) {
    if (this.state[label] === false) {
      this.setState({
        [label]: true
      });
    } else {
      this.setState({
        [label]: false
      });
    }
  }

  sorting(label) {
    this.setState({
      sorting: label
    });
  }

  colorstyling(label) {
    this.setState({
      colorStyle: label
    });
  }

  adding() {}

  render() {
    let arrCopy = this.state.contacts.slice();

    if (this.state.onSearch !== "") {
      arrCopy = this.state.contacts.filter(contact => {
        const input = this.state.search.toLowerCase();
        const name = contact.name.toLowerCase();
        return name.match(input);
      });
    }

    if (this.state.sorting === "First name") {
      arrCopy = arrCopy.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else if (this.state.sorting === "Last name") {
      arrCopy = arrCopy.sort(function(a, b) {
        const p = a.name.indexOf(" ");
        const q = b.name.indexOf(" ");
        if (a.name[p + 1] < b.name[q + 1]) return -1;
        if (a.name[p + 1] > b.name[q + 1]) return 1;
        return 0;
      });
    }

    const contactNum = arrCopy.length;
    const letters = [];

    const contacts = arrCopy.map((contact, i) => {
      let label = contact.name[0].toUpperCase();

      if (!letters.includes(label)) {
        letters.push(label);
      }

      return (
        <Contact
          key={i}
          label={label}
          name={contact.name}
          address={this.state.address && contact.address}
          email={this.state.email && contact.email}
        />
      );
    });

    const letterButtons = letters.map((letter, i) => {
      const label = "#" + letter;
      return <LetterButtons key={i} label={label} letter={letter} />;
    });

    let classes = "";
    let optionClass = "NoOption";

    if (this.state.options === true) {
      classes += "shade";
      optionClass = " Options";
    }

    const preview = [
      ["email", "email"],
      ["address", "address"],
      ["phone number", "phoneNumber"]
    ];

    const previews = preview.map(preview => {
      const text = "Show " + preview[0];
      return (
        <Option
          selected={this.state[preview[1]]}
          label={preview[1]}
          text={text}
          onClick={this.previewing}
        />
      );
    });

    const sorting = ["First name", "Last name", "Contact frequency"];
    const sortings = sorting.map(sorting => {
      return (
        <Option
          selected={this.state.sorting === sorting}
          label={sorting}
          text={sorting}
          onClick={this.sorting}
        />
      );
    });

    const colorStyle = ["Clean air", "Ocean blue", "Warm wind"];
    const colorStyles = colorStyle.map(colorStyle => {
      return (
        <Option
          selected={this.state.colorStyle === colorStyle}
          text={colorStyle}
          label={colorStyle}
          onClick={this.colorstyling}
        />
      );
    });

    return (
      <div className="App">
        <div className="topBar">
          <figure>
            <img className="moreIcon" onClick={this.options} src={moreIcon} />
          </figure>
          <div className="center">
            <p> All Contacts </p>
            <i className="fas fa-angle-down" />
          </div>
          <figure>
            <img className="addIcon" onClick={this.adding} src={addIcon} />
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
        <div className={classes} onClick={this.hideOptions} />

        <div className={optionClass}>
          <div className="top-bar">Contact List Options</div>
          <div className="optionName">Preview</div>
          {previews}
          <div className="optionName">Sort by</div>
          {sortings}
          <div className="optionName">Color Style</div>
          {colorStyles}
        </div>
      </div>
    );
  }
}

export default App;
