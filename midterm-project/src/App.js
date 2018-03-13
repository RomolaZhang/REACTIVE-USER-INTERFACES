import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.colorstyling = this.colorstyling.bind(this);

    this.state = {
      colorStyle: "Clean air",
      contacts: [
        {
          name: "Romola Zhang",
          email: "cz1302@nyu.edu",
          address: "NYU Shanghai",
          job: "Designer",
          phoneNumber: "+86 13990188277",
          id: 1
        },
        {
          name: "Chenchen Zhou",
          email: "cz1317@nyu.edu",
          address: "NYU Shanghai",
          job: "Business Analyst",
          phoneNumber: "+86 13990188277",
          id: 2
        },
        {
          name: "Mary Zhang",
          email: "hz1337@nyu.edu",
          address: "NYU Shanghai",
          job: "Business Analyst",
          phoneNumber: "+86 13990188277",
          id: 3
        },
        {
          name: "Demi Li",
          email: "yl4121@nyu.edu",
          address: "NYU Shanghai",
          job: "Musician",
          phoneNumber: "+86 13990188277",
          id: 4
        },
        {
          name: "Skye Chen",
          email: "zh969@nyu.edu",
          address: "NYU Shanghai",
          job: "Data Analyst",
          phoneNumber: "+86 13990188277",
          id: 5
        },
        {
          name: "Leah Dou",
          email: "wd622@nyu.edu",
          address: "NYU Shanghai",
          job: "Director",
          phoneNumber: "+86 13990188277",
          id: 6
        },
        {
          name: "Carol Chen",
          email: "mc6251@nyu.edu",
          address: "NYU Shanghai",
          job: "Designer",
          phoneNumber: "+86 13990188277",
          id: 7
        },
        {
          name: "Jiayu Han",
          email: "jh5270@nyu.edu",
          address: "NYU Shanghai",
          job: "Scholar",
          phoneNumber: "+86 13990188277",
          id: 8
        },
        {
          name: "Yuling Jin",
          email: "yj1077@nyu.edu",
          address: "NYU Shanghai",
          job: "Business Analyst",
          phoneNumber: "+86 13990188277",
          id: 9
        },
        {
          name: "Harry Wang",
          email: "zw1154@nyu.edu",
          address: "NYU Shanghai",
          job: "Data Analyst",
          phoneNumber: "+86 13990188277",
          id: 10
        },
        {
          name: "JH Moon",
          email: "jh.moon@nyu.edu",
          address: "NYU Shanghai",
          job: "Designer",
          phoneNumber: "+86 13990188277",
          id: 11
        },
        {
          name: "Alicia Luo",
          email: "tl2180@nyu.edu",
          address: "NYU Shanghai",
          job: "Data Analyst",
          phoneNumber: "+86 13990188277",
          id: 12
        },
        {
          name: "Grace Gao",
          email: "zg650@nyu.edu",
          address: "NYU Shanghai",
          job: "Director",
          phoneNumber: "+86 13990188277",
          id: 13
        },
        {
          name: "Ann Chen",
          email: "hhc285@nyu.edu",
          address: "NYU Shanghai",
          job: "Director",
          phoneNumber: "+86 13990188277",
          id: 14
        },
        {
          name: "Ariel Wang",
          email: "ariel.wang.nyu.edu",
          address: "NYU Shanghai",
          job: "Business Analyst",
          phoneNumber: "+86 13990188277",
          id: 15
        },
        {
          name: "Osborn Chen",
          email: "jc7483@nyu.edu",
          address: "NYU Shanghai",
          job: "Programmer",
          phoneNumber: "+86 13990188277",
          id: 16
        },
        {
          name: "Billy Zou",
          email: "yz3352@nyu.edu",
          address: "NYU Shanghai",
          job: "Programmer",
          phoneNumber: "+86 13990188277",
          id: 17
        },
        {
          name: "Shiny Wu",
          email: "syw297@nyu.edu",
          address: "NYU Shanghai",
          job: "Director",
          phoneNumber: "+86 13990188277",
          id: 18
        },
        {
          name: "Cyndi Jia",
          email: "yj1081@nyu.edu",
          address: "NYU Shanghai",
          job: "Musician",
          phoneNumber: "+86 13990188277",
          id: 19
        },
        {
          name: "Quinn He",
          email: "fh805@nyu.edu",
          address: "NYU Shanghai",
          job: "Artist",
          phoneNumber: "+86 13990188277",
          id: 20
        },
        {
          name: "Amber Lin",
          email: "ytl304@nyu.edu",
          address: "NYU Shanghai",
          job: "Director",
          phoneNumber: "+86 13990188277",
          id: 21
        },
        {
          name: "Phyllis Fei",
          email: "zf534@nyu.edu",
          address: "NYU Shanghai",
          job: "Designer",
          phoneNumber: "+86 13990188277",
          id: 22
        }
      ]
    };
  }

  colorstyling(label) {
    this.setState({
      colorStyle: label
    });
    const classColor = label.replace(/\s/g, "");
    document.body.className = classColor;
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
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
