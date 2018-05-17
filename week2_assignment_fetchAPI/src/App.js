import React, { Component } from "react";
import "./App.css";
import Article from "./Article";
import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2663a6d57fc14ea28fb2c6aa07827f5d"
    )
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          isLoading: false,
          articles: data.response.docs
        })
      );
  }

  render() {
    const articles = this.state.articles.map((article, i) => {
      const date = article.pub_date.slice(0, 10);
      return (
        <Article
          date={date}
          title={article.headline.main}
          content={article.snippet}
          link={article.web_url}
          author={article.source}
          key={i}
        />
      );
    });
    console.log(this.state.articles);
    if (this.state.isLoading) {
      return <div className="App">loading...</div>;
    } else {
      return <div className="App">{articles}</div>;
    }
  }
}

export default App;

//
// const data = [
//   {
//     date: "Jan. 30, 2018",
//     topTitle: "THE SHIFT",
//     title: "Kodak's Dubious Blockchain Gamble",
//     content:
//       "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revoluntionizing digital rights management or trying to make a quick buck.",
//     author: "Kevin Roose",
//     pic: Image1
//   },
//   {
//     date: "Jan. 30, 2018",
//     title:
//       "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel",
//     content:
//       "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
//     author: "Chris Horton",
//     pic: Image2
//   },
//   {
//     date: "Jan. 29, 2018",
//     title:
//       "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
//     content:
//       "Democratic governers nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
//     author: "Brad Plumber",
//     pic: Image3
//   }
// ];
