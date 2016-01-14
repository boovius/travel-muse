var React = require('react');
var merge = require('merge');
var Country = require('./country');

var COUNTRIES_DATA = [
  {name: 'Costa Rica'}, {name: 'Nicaragua'}
];

var Countries = React.createClass({
  getInitialState (){
    return {
      hovered: false,
    }
  },

  toggleHover (){
    this.setState({
      hovered: !this.state.hovered,
    });
  },

  render() {
    var styles = {
      container: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(237, 163, 59, .5)',
        width: '4em',
        height: '4em',
        borderRadius: '3em',
        padding: 0,
        marginLeft: 125,
        fontFamily: "'Amatic SC', cursive",
      },
      hover: {
        width: '100%',
        padding: 20,
        borderRadius: 0,
        marginLeft: 0,
      }
    };

    var countriesStyles = merge(
        styles.container,
        this.state.hovered && styles.hover
    );

    var countries = COUNTRIES_DATA.map((country) => {
      return (
        <Country
          key={country.name}
          name={country.name}
          display={!this.state.hovered}
        />
      )
    });

    return(
      <div id='countries-drawer' style={this.props.drawerStyles}>
        <ul id='countries-container'
          style={countriesStyles}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          >
          {countries}
        </ul>
      </div>
    );
  }
});

module.exports = Countries;
