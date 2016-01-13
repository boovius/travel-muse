var React = require('react');

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

module.exports = React.createClass({
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
