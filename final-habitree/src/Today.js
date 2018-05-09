import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Today.css";
import Seed from "./Seed";
import Goal from "./Goal";
import Addtime from "./Addtime";

class Today extends Component {
  constructor(props) {
    super(props);
    this.adding = this.adding.bind(this);
    this.substract = this.substract.bind(this);
    this.toggling = this.toggling.bind(this);
    this.showGoals = this.showGoals.bind(this);
    this.addTime = this.addTime.bind(this);
    this.savetime = this.savetime.bind(this);

    this.state = {
      showGoals: false
    };
  }

  showGoals() {
    this.setState({
      showGoals: !this.state.showGoals,
      goalId: null,
      addTime: false
    });
  }

  adding(id) {
    this.props.adding(id);
  }

  substract(id) {
    this.props.substract(id);
  }

  toggling(id) {
    this.props.toggling(id);
  }

  addTime(id) {
    this.setState({
      goalId: id,
      addTime: true
    });
  }

  savetime(id, hours) {
    this.props.savetime(id, hours);
    this.setState({
      goalId: 0,
      addTime: false,
      showGoals: false
    });
  }

  render() {
    const doneGoals = this.props.goals.map(goal => {
      if (goal.today > 0) {
        return (
          <div key={goal.id} className="Seed">
            <div className="seedname">
              <span>{goal.name}</span>
            </div>
            <div className="seedtime">
              <span>{goal.today} h</span>
            </div>
          </div>
        );
      }
    });

    const seeds = this.props.seeds.map((seed, i) => {
      return (
        <Seed
          key={seed.id}
          seed={seed}
          adding={this.adding}
          substract={this.substract}
          toggling={this.toggling}
        />
      );
    });

    const goal = this.props.goals.find(s => s.id === this.state.goalId);

    const goals = this.props.goals.map((goal, i) => {
      return (
        <CSSTransition
          key={goal.id}
          in={this.state.showGoals}
          timeout={300}
          classNames="goal"
          unmountOnExit
        >
          <Goal
            display={this.state.showGoals}
            goal={goal}
            addTime={this.addTime}
          />
        </CSSTransition>
      );
    });

    return (
      <div className="Today">
        <header>Today</header>
        <div className="title">Daily Seeds</div>
        <div className="wrapper">{seeds}</div>
        <div className="title">Long-term goals</div>
        <div className="wrapper">
          {doneGoals}
          <div className="Seed" onClick={this.showGoals}>
            {this.state.showGoals === false && (
              <span className="addIcon">+</span>
            )}
            {this.state.showGoals && <span className="addIcon">--</span>}
          </div>
          {goals}
        </div>
        <div className="space" />
        <div className="nav">
          <Link to="/" className="navbutton on">
            Today
          </Link>
          <Link to="/habits" className="navbutton">
            Habits
          </Link>
          <Link to="/settings" className="navbutton">
            Settings
          </Link>
        </div>
        {this.state.addTime && (
          <div className="shadow" onClick={this.showGoals} />
        )}
        {this.state.addTime && (
          <Addtime
            id={this.state.goalId}
            goal={goal}
            savetime={this.savetime}
          />
        )}
      </div>
    );
  }
}

export default Today;
