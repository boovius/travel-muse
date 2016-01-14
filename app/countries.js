import React from 'react';
import merge from 'merge';
import Country from './country';

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
    let styles = {
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
      },
      display: {
        display: 'block',
      },
      hide: {
        display: 'none',
      },
    };

    var countriesStyles = merge(
        styles.container,
        this.state.hovered && styles.hover
    );

    var exploreStyle = this.state.hovered ? styles.hide : styles.display;

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
          <span style={exploreStyle}>explore</span>
          {countries}
        </ul>
      </div>
    );
  }
});

module.exports = Countries;
