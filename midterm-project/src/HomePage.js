//import React
import React, { Component } from "react";
import { Link } from "react-router-dom";

//import Components
import Contact from "./Contact";
import LetterButtons from "./LetterButtons";
import Option from "./Option";
import Filter from "./Filter";
import FilterTop from "./FilterTop";

//import Styling things
import "./HomePage.css";
import addIcon from "./add icon@3x.png";
import moreIcon from "./more icon@3x.png";
import tag from "./tag.png";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.options = this.options.bind(this);
    this.filters = this.filters.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.hide = this.hide.bind(this);
    this.previewing = this.previewing.bind(this);
    this.sorting = this.sorting.bind(this);
    this.colorstyling = this.colorstyling.bind(this);

    this.state = {
      search: "",
      options: false,
      email: true,
      address: false,
      phoneNumber: false,
      sorting: "First name",
      filter: false,
      filters: []
    };
  }

  colorstyling(label) {
    this.props.colorstyling(label);
  }

  addFilter(label) {
    const new_filters = this.state.filters;
    new_filters.push(label);
    this.setState({
      filters: new_filters
    });
  }

  removeFilter(label) {
    const new_filters = this.state.filters;
    const index = new_filters.indexOf(label);
    new_filters.splice(index, 1);
    this.setState({
      filters: new_filters
    });
  }

  options() {
    this.setState({
      options: true
    });
  }

  filters() {
    this.setState({
      filter: true
    });
  }

  hide() {
    this.setState({
      options: false,
      filter: false
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

    let jobs = [];

    //search
    if (this.state.onSearch !== "") {
      arrCopy = arrCopy.filter(contact => {
        if (!jobs.includes(contact.job)) {
          jobs.push(contact.job);
        }
        const input = this.state.search.toLowerCase();
        const name =
          contact.firstName.toLowerCase() + contact.lastName.toLowerCase();
        return name.match(input);
      });
    }

    //sorting
    if (this.state.sorting === "First name") {
      arrCopy = arrCopy.sort(function(a, b) {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
        return 0;
      });
    } else if (this.state.sorting === "Last name") {
      arrCopy = arrCopy.sort(function(a, b) {
        if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
        return 0;
      });
    }

    //filtering
    if (this.state.filters.length !== 0) {
      arrCopy = arrCopy.filter(contact => {
        let i;
        for (i = 0; i < this.state.filters.length; i++) {
          if (contact.job.match(this.state.filters[i])) {
            return contact;
          }
        }
      });
    }

    const contactNum = arrCopy.length;
    const letters = [];

    //map out contact elements and get the inital letters
    const contacts = arrCopy.map((contact, i) => {
      let label;
      if (this.state.sorting === "First name") {
        label = contact.firstName[0].toUpperCase();
      } else {
        label = contact.lastName[0].toUpperCase();
      }
      if (!letters.includes(label)) {
        letters.push(label);
      }
      return (
        <Contact
          key={"contact" + contact.id}
          id={contact.id}
          label={label}
          firstName={contact.firstName}
          lastName={contact.lastName}
          addressState={this.state.address}
          address={contact.address}
          emailState={this.state.email}
          email={contact.email}
          phoneNumber={contact.phoneNumber}
          phoneNumberState={this.state.phoneNumber}
          colorStyle={this.props.colorStyle}
        />
      );
    });

    //map out the letter buttons
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

    //assign classes to elements in order to change their display mode
    let classes = "";
    let optionClass = "No ";
    let filterClass = "No ";
    let filterTop = "No ";

    if (this.state.options) {
      classes += "shade";
      optionClass = " Yes ";
    }

    if (this.state.filter) {
      classes += "shade";
      filterClass = " Yes ";
    }

    if (this.state.filters.length > 0) {
      filterTop = " filterTop ";
    }

    const preview = [
      ["email", "email"],
      ["address", "address"],
      ["phone number", "phoneNumber"]
    ];

    //map out preview options
    const previews = preview.map((preview, i) => {
      const text = "Show " + preview[0];
      return (
        <Option
          key={i}
          selected={this.state[preview[1]]}
          colorStyle={this.props.colorStyle}
          label={preview[1]}
          text={text}
          onClick={this.previewing}
        />
      );
    });

    //map out sorting options
    const sorting = ["First name", "Last name"];
    const sortings = sorting.map((sorting, i) => {
      return (
        <Option
          key={i}
          selected={this.state.sorting === sorting}
          colorStyle={this.props.colorStyle}
          label={sorting}
          text={sorting}
          onClick={this.sorting}
        />
      );
    });

    //map out colorStyle options
    const colorStyle = ["Clean air", "Dark fusion", "Warm wind"];
    const colorStyles = colorStyle.map((colorStyle, i) => {
      return (
        <Option
          key={i}
          selected={this.props.colorStyle === colorStyle}
          colorStyle={this.props.colorStyle}
          text={colorStyle}
          label={colorStyle}
          onClick={this.colorstyling}
        />
      );
    });

    //map out filter options
    const tags = jobs.map((job, i) => {
      return (
        <Filter
          key={i}
          selected={this.state.filters.includes(job)}
          text={job}
          colorStyle={this.props.colorStyle}
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
        />
      );
    });

    //map out filter buttons on the top
    const filtersTops = this.state.filters.map((filter, i) => {
      return (
        <FilterTop
          key={i}
          label={filter}
          colorStyle={this.props.colorStyle}
          onClick={this.removeFilter}
        />
      );
    });

    const classColor = this.props.colorStyle.replace(/\s/g, "");

    return (
      <div className={"HomePage " + classColor}>
        {/* top bar */}
        <div className={"topBar " + classColor}>
          <figure>
            <img
              className={"moreIcon " + classColor}
              onClick={this.options}
              src={moreIcon}
            />
          </figure>
          <div className={"center " + classColor}>
            <p> myContact </p>
          </div>
          <Link to="/new">
            <figure>
              <img className={"addIcon " + classColor} src={addIcon} />
            </figure>
          </Link>
        </div>
        {/* search bar */}
        <div className="blackspace" />
        <div className="searchLine">
          <input
            className={"searchBar " + classColor}
            placeholder="Search here"
            onChange={this.onSearch}
          />
          <div className="tag">
            <img
              className={"tagimg " + classColor}
              onClick={this.filters}
              src={tag}
            />
          </div>
        </div>
        {/* filter buttons on the top */}
        <div className={filterTop + classColor}>
          {"Filtered by: "}
          {filtersTops}
        </div>
        {/* main contact list */}
        <div className="main">
          <div className="contacts">
            {contacts}
            <div className={"contactNum " + classColor}>
              {contactNum} contacts
            </div>
          </div>
          <div className={"sideBar " + classColor}>#{letterButtons}</div>
        </div>
        {/* the grey cover */}
        <div className={classes} onClick={this.hide} />
        {/* options memu */}
        <div className={optionClass + classColor}>
          <div className={"top-bar " + classColor}>Contact List Options</div>
          <div className={"optionName " + classColor}>Preview</div>
          {previews}
          <div className={"optionName " + classColor}>Sort by</div>
          {sortings}
          <div className={"optionName " + classColor}>Color Style</div>
          {colorStyles}
        </div>
        {/* filter menu */}
        <div className={filterClass + classColor}>
          <div className={"top-bar " + classColor}>Filters</div>
          <div className={"jobs " + classColor}> Jobs </div>
          {tags}
        </div>
      </div>
    );
  }
}

export default HomePage;
