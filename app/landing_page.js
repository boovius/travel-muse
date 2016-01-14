var React = require('react');
var Countries = require('./countries.js');
var merge = require('merge');

var backgroundImage = require('./src/through_the_glasses.jpg');

var backgroundStyles = {
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


var titleBarStyles = {
  position: 'absolute',
  top: '20%',
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}

var titleWordStyles = {
  fontSize: '8em',
  color: 'white',
  fontFamily: "'Amatic SC', cursive",
}

var firstWordStyles = {
  marginLeft: '10%',
}

var Title = React.createClass({
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

var countriesDrawerStyles = {
  position: 'absolute',
  bottom: '2%',
  width: '100%',
  backgroundColor: 'rgba(237, 163, 59, .6)',
}

var LandingPage = React.createClass({
  render() {
    return (
      <div id='background' style={backgroundStyles}>
        <Title />
        <Countries drawerStyles={countriesDrawerStyles}/>
      </div>
    );
  }
});

module.exports = LandingPage;
