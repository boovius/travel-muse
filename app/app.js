var React = require('react');
var ReactDOM = require('react-dom');
require('./normalize.css');

var countriesDrawerStyles = {
  position: 'absolute',
  bottom: 5,
  width: '100%',
  backgroundColor: 'orange',
}

var countriesContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}

var countryStyles = {
  padding: 5,
  listStyle: 'none',
  backgroundColor: 'yellow',
}

var Countries = React.createClass({
  render() {
    return(
      <div id='countries-drawer' style={countriesDrawerStyles}>
        <ul id='countries-container' style={countriesContainerStyles}>
          <li style={countryStyles}>
            Costa Rica
          </li>
          <li style={countryStyles}>
            Nicaragua
          </li>
        </ul>
      </div>
    );
  }
});

var Terrain = React.createClass({
  render() {
    return(
      <ul>
        <li>
          mountains
        </li>
        <li>
          beaches
        </li>
        <li>
          tropical rain forest
        </li>
        <li>
          cloud forest
        </li>
      </ul>
    );
  }
});

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
}

var App = React.createClass({
  render() {
    return (
      <div id='background' style={backgroundStyles}>
        <Countries />
      </div>
    );
  }
});


ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

