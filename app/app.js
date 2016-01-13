var React = require('react');
var ReactDOM = require('react-dom');
require('./normalize.css');
var Countries = require('./countries.js');

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

