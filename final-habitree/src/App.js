import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Today from "./Today";
import Habits from "./Habits";
import Settings from "./Settings";

class App extends Component {
  constructor(props) {
    super(props);

    let initialState = localStorage.getItem("appData");
    if (initialState) {
      this.state = JSON.parse(initialState);
    } else {
      this.state = {
        seeds: [
          {
            name: "Go for a Walk",
            time: 3,
            completed: 0,
            day: 0,
            aim: 21,
            id: 1,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          },
          {
            name: "Sleep Early",
            time: 1,
            completed: 0,
            day: 0,
            aim: 1,
            id: 2,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          },
          {
            name: "Reflection",
            time: 1,
            completed: 0,
            aim: 7,
            day: 0,
            id: 3,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          },
          {
            name: "Eat Fruit",
            time: 2,
            completed: 0,
            day: 0,
            aim: 2,
            id: 4,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          }
        ],
        goals: [
          {
            name: "Work out",
            completed: 0,
            aim: 50,
            id: 1,
            today: 0,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          },
          {
            name: "Reading",
            completed: 0,
            aim: 10,
            id: 2,
            today: 0,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          },
          {
            name: "Learning",
            completed: 0,
            aim: 30,
            id: 3,
            today: 0,
            angle: Math.random() * 0.25 + Math.PI / 7,
            angle2: Math.random() * 0.25 + Math.PI / 7,
            len: Math.random() * 0.07 + 0.585
          }
        ]
      };
    }
    this.toggling = this.toggling.bind(this);
    this.adding = this.adding.bind(this);
    this.substract = this.substract.bind(this);
    this.savetime = this.savetime.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.del = this.del.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("appData", JSON.stringify(this.state));
  }

  edit(id, times, target, type) {
    if (type === "seed") {
      let copy = Object.assign([], this.state.seeds);
      let seed = copy.find(s => s.id === parseInt(id));
      let new_seed = seed;
      const index = copy.indexOf(seed);
      new_seed = {
        name: seed.name,
        time: parseInt(times),
        completed: seed.completed,
        aim: parseInt(target),
        day: seed.day,
        id: seed.id,
        angle: seed.angle,
        angle2: seed.angle2,
        len: seed.len
      };
      copy[index] = new_seed;
      this.setState({
        seeds: copy
      });
    } else {
      let copy = Object.assign([], this.state.goals);
      let goal = copy.find(g => g.id === parseInt(id));
      let new_goal = goal;
      const index = copy.indexOf(goal);
      new_goal = {
        name: goal.name,
        completed: goal.completed,
        aim: parseInt(target),
        id: goal.id,
        today: goal.today,
        angle: goal.angle,
        angle2: goal.angle2,
        len: goal.len
      };
      copy[index] = new_goal;
      this.setState({
        goals: copy
      });
    }
  }

  del(id, type) {
    if (type === "seed") {
      let copy = Object.assign([], this.state.seeds);
      const seed = this.state.seeds.find(s => s.id === parseInt(id));
      const index = copy.indexOf(seed);
      copy.splice(index, 1);
      this.setState({
        seeds: copy
      });
    } else {
      let copy = Object.assign([], this.state.goals);
      const goal = this.state.goals.find(g => g.id === parseInt(id));
      const index = copy.indexOf(goal);
      copy.splice(index, 1);
      this.setState({
        goals: copy
      });
    }
  }

  save(name, target, times, type) {
    if (type === "d") {
      let copy = Object.assign([], this.state.seeds);
      const lastid = copy[copy.length - 1].id;
      copy.push({
        name: name,
        time: parseInt(times),
        completed: 0,
        day: 0,
        aim: parseInt(target),
        id: lastid + 1
      });
      this.setState({
        seeds: copy
      });
    } else {
      let copy = Object.assign([], this.state.goals);
      const lastid = copy[copy.length - 1].id;
      copy.push({
        name: name,
        completed: 0,
        aim: parseInt(target),
        id: lastid + 1,
        today: 0,
        angle: Math.random() * 0.25 + Math.PI / 7,
        angle2: Math.random() * 0.25 + Math.PI / 7,
        len: Math.random() * 0.1 + 0.58
      });
      this.setState({
        goals: copy
      });
    }
  }

  toggling(id) {
    let copy = Object.assign([], this.state.seeds);
    let seed = copy.find(s => s.id === parseInt(id));
    const index = copy.indexOf(seed);
    if (seed.completed === 0) {
      seed.completed = 1;
      seed.day += 1;
    } else {
      seed.completed = 0;
      seed.day -= 1;
    }
    copy[index] = seed;
    this.setState({
      seeds: copy
    });
  }

  adding(id) {
    let copy = Object.assign([], this.state.seeds);
    let seed = copy.find(s => s.id === parseInt(id));
    const index = copy.indexOf(seed);
    if (seed.completed < seed.time) {
      seed.completed += 1;
    }
    if (seed.completed === parseInt(seed.time)) {
      seed.day += 1;
    }
    copy[index] = seed;
    this.setState({
      seeds: copy
    });
  }

  substract(id) {
    let copy = Object.assign([], this.state.seeds);
    let seed = copy.find(s => s.id === parseInt(id));
    const index = copy.indexOf(seed);
    if (seed.completed > 0) {
      seed.completed -= 1;
    }
    if (seed.day > 0) {
      seed.day -= 1;
    }
    copy[index] = seed;
    this.setState({
      seeds: copy
    });
  }

  savetime(id, hours) {
    let copy = Object.assign([], this.state.goals);
    let goal = copy.find(g => g.id === parseInt(id));
    const index = copy.indexOf(goal);
    if (goal.completed + parseInt(hours) <= goal.aim) {
      goal.completed += parseInt(hours);
      goal.today += parseInt(hours);
    }
    copy[index] = goal;
    this.setState({
      goals: copy
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <Today
                seeds={this.state.seeds}
                goals={this.state.goals}
                adding={this.adding}
                substract={this.substract}
                toggling={this.toggling}
                savetime={this.savetime}
              />
            )}
          />
          <Route
            exact
            path="/habits"
            render={props => (
              <Habits
                seeds={this.state.seeds}
                goals={this.state.goals}
                save={this.save}
                edit={this.edit}
                del={this.del}
              />
            )}
          />
          <Route exact path="/settings" render={props => <Settings />} />
        </div>
      </Router>
    );
  }
}

export default App;
