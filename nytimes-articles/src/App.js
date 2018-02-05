import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Image1 from './image1.png';
import Image2 from './image2.png';
import Image3 from './image3.png';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Article
           date = "Jan. 30, 2018"
           topTitle = "THE SHIFT"
           title = "Kodak's Dubious Blockchain Gamble"
           content = "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revoluntionizing digital rights management or trying to make a quick buck."
           author = "Kevin Roose"
           pic = {Image1}
           />
           <Article
           date = "Jan. 30, 2018"
           title = "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel"
           content = "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday."
           author = "Chris Horton"
           pic = {Image2}
           />
           <Article
           date = "Jan. 29, 2018"
           title = "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon"
           content = "Democratic governers nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy."
           author = "Brad Plumber"
           pic = {Image3}
           />
      </div>
    );
  }
}

export default App;
