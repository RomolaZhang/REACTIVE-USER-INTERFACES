import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <div className="date">{this.props.date}</div>
        <div className="Container">
          <div className="top-title">{this.props.topTitle}</div>
          <a href={this.props.link} className="title">
            {this.props.title}
          </a>
          <p>{this.props.content}</p>
          <div className="author">
            By <span>{this.props.author}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
