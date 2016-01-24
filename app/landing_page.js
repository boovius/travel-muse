import React from 'react';
import merge from 'merge';
import CountriesPresenter from './countries_presenter';

let backgroundImage = require('./src/through_the_glasses.jpg');

let backgroundStyles = {
  backgroundImage: 'url(' + backgroundImage + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};


let titleBarStyles = {
  position: 'absolute',
  top: '20%',
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}

let titleWordStyles = {
  fontSize: '8em',
  color: 'white',
  fontFamily: "'Amatic SC', cursive",
}

let firstWordStyles = {
  marginLeft: '10%',
}

let Title = React.createClass({
  render() {
    return(
      <div id='title-bar' style={titleBarStyles}>
        <div id='travel' style={merge(firstWordStyles, titleWordStyles) }>
          TRAVEL
        </div>
        <div id='mused' style={titleWordStyles}>
          MUSED
        </div>
      </div>
    );
  }
});

let LandingPage = React.createClass({
  render() {
    return (
      <div id='background' style={backgroundStyles}>
        <Title />
        <CountriesPresenter />
      </div>
    );
  }
});

module.exports = LandingPage;
