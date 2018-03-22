import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import New from "./New";
import Edit from "./Edit";

class App extends Component {
  constructor(props) {
    super(props);

    this.colorstyling = this.colorstyling.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.del = this.del.bind(this);

    let initialState = localStorage.getItem("appData");
    if (initialState) {
      this.state = JSON.parse(initialState);
    } else {
      this.state = {
        colorStyle: "Clean air",
        contacts: [
          {
            firstName: "Romola",
            lastName: "Zhang",
            email: "cz1302@nyu.edu",
            address: "NYU Shanghai",
            job: "Designer",
            phoneNumber: "+86 13990188277",
            id: 1
          },
          {
            firstName: "Chenchen",
            lastName: "Zhou",
            email: "cz1317@nyu.edu",
            address: "NYU Shanghai",
            job: "Business Analyst",
            phoneNumber: "+86 13990188277",
            id: 2
          },
          {
            firstName: "Mary",
            lastName: "Zhang",
            email: "hz1337@nyu.edu",
            address: "NYU Shanghai",
            job: "Business Analyst",
            phoneNumber: "+86 13990188277",
            id: 3
          },
          {
            firstName: "Demi",
            lastName: "Li",
            email: "yl4121@nyu.edu",
            address: "NYU Shanghai",
            job: "Musician",
            phoneNumber: "+86 13990188277",
            id: 4
          },
          {
            firstName: "Skye",
            lastName: "Chen",
            email: "zh969@nyu.edu",
            address: "NYU Shanghai",
            job: "Data Analyst",
            phoneNumber: "+86 13990188277",
            id: 5
          },
          {
            firstName: "Leah",
            lastName: "Dou",
            email: "wd622@nyu.edu",
            address: "NYU Shanghai",
            job: "Director",
            phoneNumber: "+86 13990188277",
            id: 6
          },
          {
            firstName: "Carol",
            lastName: "Chen",
            email: "mc6251@nyu.edu",
            address: "NYU Shanghai",
            job: "Designer",
            phoneNumber: "+86 13990188277",
            id: 7
          },
          {
            firstName: "Rain",
            lastName: "Han",
            email: "jh5270@nyu.edu",
            address: "NYU Shanghai",
            job: "Scholar",
            phoneNumber: "+86 13990188277",
            id: 8
          },
          {
            firstName: "Agnes",
            lastName: "Jin",
            email: "yj1077@nyu.edu",
            address: "NYU Shanghai",
            job: "Business Analyst",
            phoneNumber: "+86 13990188277",
            id: 9
          },
          {
            firstName: "Harry",
            lastName: "Wang",
            email: "zw1154@nyu.edu",
            address: "NYU Shanghai",
            job: "Data Analyst",
            phoneNumber: "+86 13990188277",
            id: 10
          },
          {
            firstName: "JH",
            lastName: "Moon",
            email: "jh.moon@nyu.edu",
            address: "NYU Shanghai",
            job: "Designer",
            phoneNumber: "+86 13990188277",
            id: 11
          },
          {
            firstName: "Alicia",
            lastName: "Luo",
            email: "tl2180@nyu.edu",
            address: "NYU Shanghai",
            job: "Data Analyst",
            phoneNumber: "+86 13990188277",
            id: 12
          },
          {
            firstName: "Grace",
            lastName: "Gao",
            email: "zg650@nyu.edu",
            address: "NYU Shanghai",
            job: "Director",
            phoneNumber: "+86 13990188277",
            id: 13
          },
          {
            firstName: "Ann",
            lastName: "Chen",
            email: "hhc285@nyu.edu",
            address: "NYU Shanghai",
            job: "Director",
            phoneNumber: "+86 13990188277",
            id: 14
          },
          {
            firstName: "Ariel",
            lastName: "Wang",
            email: "ariel.wang.nyu.edu",
            address: "NYU Shanghai",
            job: "Business Analyst",
            phoneNumber: "+86 13990188277",
            id: 15
          },
          {
            firstName: "Osborn",
            lastName: "Chen",
            email: "jc7483@nyu.edu",
            address: "NYU Shanghai",
            job: "Programmer",
            phoneNumber: "+86 13990188277",
            id: 16
          },
          {
            firstName: "Billy",
            lastName: "Zou",
            email: "yz3352@nyu.edu",
            address: "NYU Shanghai",
            job: "Programmer",
            phoneNumber: "+86 13990188277",
            id: 17
          },
          {
            firstName: "Shiny",
            lastName: "Wu",
            email: "syw297@nyu.edu",
            address: "NYU Shanghai",
            job: "Director",
            phoneNumber: "+86 13990188277",
            id: 18
          },
          {
            firstName: "Cyndi",
            lastName: "Jia",
            email: "yj1081@nyu.edu",
            address: "NYU Shanghai",
            job: "Musician",
            phoneNumber: "+86 13990188277",
            id: 19
          },
          {
            firstName: "Quinn",
            lastName: "He",
            email: "fh805@nyu.edu",
            address: "NYU Shanghai",
            job: "Artist",
            phoneNumber: "+86 13990188277",
            id: 20
          },
          {
            firstName: "Amber",
            lastName: "Lin",
            email: "ytl304@nyu.edu",
            address: "NYU Shanghai",
            job: "Director",
            phoneNumber: "+86 13990188277",
            id: 21
          },
          {
            firstName: "Phyllis",
            lastName: "Fei",
            email: "zf534@nyu.edu",
            address: "NYU Shanghai",
            job: "Designer",
            phoneNumber: "+86 13990188277",
            id: 22
          }
        ]
      };
    }
  }

  colorstyling(label) {
    this.setState({
      colorStyle: label
    });
    const classColor = label.replace(/\s/g, "");
    document.body.className = classColor;
  }

  save(firstName, lastName, job, email, address, phoneNumber) {
    let copy = this.state.contacts.slice();
    const lastid = copy[copy.length - 1].id;
    copy.push({
      firstName: firstName,
      lastName: lastName,
      job: job,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      id: lastid + 1
    });

    this.setState({
      contacts: copy
    });
  }

  del(id) {
    let copy = this.state.contacts.slice();
    const contact = this.state.contacts.find(c => c.id === parseInt(id));
    const index = copy.indexOf(contact);
    copy.splice(index, 1);
    this.setState({
      contacts: copy
    });
  }

  edit(firstName, lastName, job, email, address, phoneNumber, id) {
    let copy = this.state.contacts.slice();
    const contact = this.state.contacts.find(c => c.id === parseInt(id));
    let new_contact = contact;
    const index = copy.indexOf(contact);
    new_contact = {
      firstName: firstName,
      lastName: lastName,
      job: job,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      id: id
    };
    copy[index] = new_contact;
    this.setState({
      contacts: copy
    });
  }

  componentDidUpdate() {
    localStorage.setItem("appData", JSON.stringify(this.state));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                contacts={this.state.contacts}
                colorStyle={this.state.colorStyle}
                colorstyling={this.colorstyling}
              />
            )}
          />
          <Route
            path="/contacts/:id"
            render={props => {
              const contact = this.state.contacts.find(
                c => c.id === parseInt(props.match.params.id)
              );
              return (
                <ContactPage
                  colorStyle={this.state.colorStyle}
                  contact={contact}
                />
              );
            }}
          />
          <Route
            path="/edit/:id"
            render={props => {
              const contact = this.state.contacts.find(
                c => c.id === parseInt(props.match.params.id)
              );
              return (
                <Edit
                  colorStyle={this.state.colorStyle}
                  contact={contact}
                  del={this.del}
                  onClick={this.edit}
                />
              );
            }}
          />

          <Route
            exact
            path="/new"
            render={props => (
              <New colorStyle={this.state.colorStyle} onClick={this.save} />
            )}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
