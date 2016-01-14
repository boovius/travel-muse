var React = require('react');
var ReactDOM = require('react-dom');
require('./normalize.css');
var LandingPage = require('./landing_page.js');

var App = React.createClass({
  render() {
    return(
      <LandingPage />
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

