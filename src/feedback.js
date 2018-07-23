import React from 'react';
import './feedback.css';

export default function Feedback(props) {
  return (
    <h2 id="feedback">{props.text}</h2>
  );
}

Feedback.defaultProps = {
  text: 'Make your Guess!'
};