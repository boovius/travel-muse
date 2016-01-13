var React = require('react');
var ReactDOM = require('react-dom');
require('./normalize.css');

var App = React.createClass({
  render() {
    return (
      <div>hello world</div>
    );
  }
});


ReactDOM.render(
  <App/>,
  document.getElementById('container')
);

