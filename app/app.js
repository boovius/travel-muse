var React = require('react');
var ReactDOM = require('react-dom');

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

