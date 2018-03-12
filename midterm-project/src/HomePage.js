import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import addIcon from "./add icon@3x.png";
import moreIcon from "./more icon@3x.png";
import tag from "./tag.png";
import Contact from "./Contact";
import LetterButtons from "./LetterButtons";
import Option from "./Option";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.options = this.options.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
    this.previewing = this.previewing.bind(this);
    this.sorting = this.sorting.bind(this);
    this.colorstyling = this.colorstyling.bind(this);

    this.state = {
      search: "",
      options: false,
      email: true,
      address: false,
      phoneNumber: false,
      sorting: "First name"
    };
  }

  colorstyling(label) {
    this.props.colorstyling(label);
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

  render() {
    let arrCopy = this.props.contacts.slice();

    if (this.state.onSearch !== "") {
      arrCopy = arrCopy.filter(contact => {
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
          key={"contact" + contact.id}
          id={contact.id}
          label={label}
          name={contact.name}
          addressState={this.state.address}
          address={contact.address}
          emailState={this.state.email}
          email={contact.email}
          colorStyle={this.props.colorStyle}
        />
      );
    });

    const letterButtons = letters.map((letter, i) => {
      const label = "#" + letter;
      return (
        <LetterButtons
          key={i}
          colorStyle={this.props.colorStyle}
          label={label}
          letter={letter}
        />
      );
    });

    let classes = "";
    let optionClass = "NoOption ";

    if (this.state.options === true) {
      classes += "shade";
      optionClass = " Options ";
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
          colorStyle={this.props.colorStyle}
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
          colorStyle={this.props.colorStyle}
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
          selected={this.props.colorStyle === colorStyle}
          colorStyle={this.props.colorStyle}
          text={colorStyle}
          label={colorStyle}
          onClick={this.colorstyling}
        />
      );
    });

    const classColor = this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className={"HomePage " + classColor}>
        <div className={"topBar " + classColor}>
          <figure>
            <img
              className={"moreIcon " + classColor}
              onClick={this.options}
              src={moreIcon}
            />
          </figure>
          <div className={"center " + classColor}>
            <p> All Contacts </p>
            <i className={"fas fa-angle-down " + classColor} />
          </div>
          <figure>
            <img className={"addIcon " + classColor} src={addIcon} />
          </figure>
        </div>
        <div className="blackspace" />
        <div className="searchLine">
          <input
            className={"searchBar " + classColor}
            placeholder="Search in All Contacts"
            onChange={this.onSearch}
          />
          <div className="tag">
            <img className={"tagimg " + classColor} src={tag} />
          </div>
        </div>
        <div className="main">
          <div className="contacts">
            {contacts}
            <div className={"contactNum " + classColor}>
              {contactNum} contacts
            </div>
          </div>
          <div className={"sideBar " + classColor}>#{letterButtons}</div>
        </div>
        <div className={classes} onClick={this.hideOptions} />

        <div className={optionClass + classColor}>
          <div className={"top-bar " + classColor}>Contact List Options</div>
          <div className={"optionName " + classColor}>Preview</div>
          {previews}
          <div className={"optionName " + classColor}>Sort by</div>
          {sortings}
          <div className={"optionName " + classColor}>Color Style</div>
          {colorStyles}
        </div>
      </div>
    );
  }
}

export default HomePage;
