import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import LandingPage from './landing_page.js';
import MotionBoxes from './motion.js';

var App = React.createClass({
  render () {
    return (
      <LandingPage />
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

