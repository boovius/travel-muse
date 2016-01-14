var React = require('react');

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
  cursor: 'pointer'
}

module.exports = React.createClass({
  render() {
    return(
      <div id='countries-drawer' style={this.props.drawerStyles}>
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
