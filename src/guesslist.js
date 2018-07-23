import React from 'react';
import './guesslist.css';

export default function GuessList (props) {
  return (
    <li>{props.pastGuesses}</li>
  );
}

GuessList.defaultProps = {
  pastGuesses: [50]
};