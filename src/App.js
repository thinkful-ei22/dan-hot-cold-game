import React from 'react';
import './App.css';

import GuessList from './guesslist';
import Feedback from './feedback';
import Counter from './counter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

render() {

  return (
    <div>

      <Feedback />

      <form>
        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess"
          required />
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
      </form>

      <p>Guess #
        <Counter />
      </p>

      <ul id="guessList" className="guessBox clearfix">
        <GuessList />
      </ul>

    </div>
  )
  }
}