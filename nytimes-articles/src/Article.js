import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
          <div className = "date">{this.props.date}</div>
          <div className = "Container">
             <div className = "top-title">{this.props.topTitle}</div>
             <div className = "title">{this.props.title}</div>
             <div className = "content">{this.props.content}</div>
             <div className = "author">By {this.props.author}</div>
          </div>
          <div className = "pic">
          <img src = {this.props.pic}/>
          </div>
      </div>
    );
  }
}

export default Article;
