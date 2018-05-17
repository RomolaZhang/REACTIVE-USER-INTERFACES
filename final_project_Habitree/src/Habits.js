import React, { Component } from "react";
import { Link } from "react-router-dom";
import Goalbox from "./Goalbox";
import Seedbox from "./Seedbox";
import Addhabit from "./Addhabit";
import "./Habits.css";

class Habits extends Component {
  constructor(props) {
    super(props);
    this.seeSeeds = this.seeSeeds.bind(this);
    this.seeGoals = this.seeGoals.bind(this);
    this.selectSeed = this.selectSeed.bind(this);
    this.selectGoal = this.selectGoal.bind(this);
    this.addHabit = this.addHabit.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.del = this.del.bind(this);
    let initialState = localStorage.getItem("habitData");
    if (initialState) {
      this.state = JSON.parse(initialState);
    } else {
      this.state = {
        see: "seeds",
        addHabit: false,
        selectedSeed: 1,
        selectedGoal: 1
      };
    }
  }

  componentDidUpdate() {
    localStorage.setItem("habitData", JSON.stringify(this.state));
  }
  save(name, target, times, type) {
    this.props.save(name, target, times, type);
    this.addHabit();
  }

  edit(id, times, target, type) {
    this.props.edit(id, times, target, type);
  }

  del(id, type) {
    if (type === "seed") {
      this.setState({ selectedSeed: this.state.selectedSeed + 1 });
    } else {
      this.setState({ selectedGoal: this.state.selectedGoal + 1 });
    }
    this.props.del(id, type);
  }

  seeSeeds() {
    this.setState({
      see: "seeds"
    });
  }

  seeGoals() {
    this.setState({
      see: "goals"
    });
  }

  selectSeed(id) {
    this.setState({
      selectedSeed: id
    });
  }

  selectGoal(id) {
    this.setState({
      selectedGoal: id
    });
  }

  addHabit() {
    this.setState({
      addHabit: !this.state.addHabit
    });
  }

  render() {
    let thatone;
    let target, completed;
    if (this.state.see === "seeds") {
      thatone = this.props.seeds.find(s => s.id === this.state.selectedSeed);
      window.count = Math.floor(thatone.day * 7 / thatone.aim);
      window.angle = thatone.angle;
      window.angle2 = thatone.angle2;
      window.len = thatone.len;
      window.id = thatone.id;
      window.type = "seed";
      target = "Target: " + thatone.aim + "d";
      completed = "Completed: " + thatone.day + "d";
    } else {
      thatone = this.props.goals.find(g => g.id === this.state.selectedGoal);
      window.count = Math.floor(thatone.completed * 7 / thatone.aim);
      window.angle = thatone.angle;
      window.angle2 = thatone.angle2;
      window.len = thatone.len;
      window.id = thatone.id;
      window.type = "goal";
      target = "Target: " + thatone.aim + "h";
      completed = "Completed: " + thatone.completed + "h";
    }

    let seedCopy = this.props.seeds.slice();

    seedCopy = seedCopy.sort(function(a, b) {
      if (Math.floor(a.day / a.aim) < Math.floor(b.day / b.aim)) return -1;
      if (Math.floor(a.day / a.aim) > Math.floor(b.day / b.aim)) return 1;
      return 0;
    });

    const seeds = seedCopy.map((seed, i) => {
      return (
        <Seedbox
          key={seed.id}
          seed={seed}
          edit={this.edit}
          del={this.del}
          selected={this.state.selectedSeed === seed.id}
          onClick={this.selectSeed}
        />
      );
    });

    let goalCopy = this.props.goals.slice();

    goalCopy = goalCopy.sort(function(a, b) {
      if (Math.floor(a.completed / a.aim) < Math.floor(b.completed / b.aim))
        return -1;
      if (Math.floor(a.completed / a.aim) > Math.floor(b.completed / b.aim))
        return 1;
      return 0;
    });

    const goals = goalCopy.map((goal, i) => {
      return (
        <Goalbox
          key={goal.id}
          goal={goal}
          edit={this.edit}
          del={this.del}
          selected={this.state.selectedGoal === goal.id}
          onClick={this.selectGoal}
        />
      );
    });

    let seed = "";
    if (this.state.see === "seeds") {
      seed += " focus";
    }

    let goal = "";
    if (this.state.see === "goals") {
      goal += " focus";
    }

    return (
      <div className="Habits">
        <header className="habits">Habits</header>
        <span className="addbutton" onClick={this.addHabit}>
          +
        </span>
        <div className="detail">
          <span className="details">{target}</span>
          <span className="details">{completed}</span>
        </div>
        <div className="wrap">
          <span className={"tag seed" + seed} onClick={this.seeSeeds}>
            Daily Seed
          </span>
          <span className={"tag goal" + goal} onClick={this.seeGoals}>
            Long-term Goals
          </span>
          {this.state.see === "seeds" ? (
            <div className="scroll">{seeds}</div>
          ) : (
            <div className="scroll"> {goals}</div>
          )}
        </div>
        <div className="nav">
          <Link to="/" className="navbutton">
            Today
          </Link>
          <Link to="/habits" className="navbutton on">
            Habits
          </Link>
          <Link to="/settings" className="navbutton">
            Settings
          </Link>
        </div>
        {this.state.addHabit && (
          <div className="shadow" onClick={this.addHabit} />
        )}
        {this.state.addHabit && <Addhabit save={this.save} />}
      </div>
    );
  }
}

export default Habits;
