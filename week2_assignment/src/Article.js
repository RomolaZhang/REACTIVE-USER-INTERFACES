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
             <p>{this.props.content}</p>
             <div className = "author">
                By <span>{this.props.author}
                </span>
             </div>
          </div>
          <figure>
          <img src = {this.props.pic}/>
          </figure>
      </div>
    );
  }
}

export default Article;
