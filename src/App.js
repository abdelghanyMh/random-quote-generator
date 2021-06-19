import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "loading...",
      author: "loading...",
      isLoaded: false,



    };
  }

  componentDidMount() {
    // get random qoute
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(result => {
        const maxNumber = 103; /**there is only 103 english quotes */
        let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        this.setState({
          quote: result.quotes[randomNumber].quote,
          author: result.quotes[randomNumber].author,
          isLoaded: true
        })

      });
    this.handleNewQuote = this.handleNewQuote.bind(this);


  }

  handleNewQuote() {
    /**
     * crate new random gradiant color and change the root variable
     * source:
     * https://codepen.io/chrisgresh/pen/aNjovb
     * https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript/37802204#37802204
     *
     */

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    const populate = () => {
      let a='#';
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }

    var newColor1 = populate();
    var newColor2 = populate();
    var angle = Math.round(Math.random() * 360);

    var newGradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

    document.documentElement.style.setProperty('--main-gradient-color',newGradient)

    // get new random quotes
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(result => {
        const max = 102; /**there is only 102 english quotes */
        const min =1;
        let randomNumber = Math.floor(Math.random() * (max - min)) + min
        // let randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        console.log(result.quotes.length+"miwmiw");

        console.log(randomNumber);
        console.log(result.quotes[randomNumber].quote);
        this.setState({
          quote: result.quotes[randomNumber].quote,
          author: result.quotes[randomNumber].author,
          isLoaded: true
        })

      });


  }

  render() {
    return (
      <section id="quote-box">
        <p class="gradient-text" id="text" >{this.state.quote}</p>
        <p class="gradient-text" id="author">-{this.state.author} </p>
        <div id="actions">

          <a class="gradient-bg" id="tweet-quote" type="button" role="button" title="Share on twitter"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&url=${this.state.quote}-${this.state.author}`}
            arget="_blank"
            rel="noopener">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <button class="gradient-bg" id="new-quote" onClick={this.handleNewQuote}>next quote</button></div>
      </section>

    );
  }



}




export default App;
