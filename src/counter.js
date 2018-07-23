import React from 'react';
import './counter.css';

export default function Counter (props) {
  return (
    <span id="count">{props.currentCount}</span>
  );
}

Counter.defaultProps = {
  currentCount: 3
};