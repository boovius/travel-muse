var React = require('react');
var merge = require('merge');

var countriesContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}

var Country = React.createClass({
  getInitialState (){
    return {
      hovered: false
    }
  },

  toggleHover (){
    this.setState({hovered: !this.state.hovered});
  },

  styles: {
    country: {
      padding: 5,
      listStyle: 'none',
      border: '1px solid black',
      borderRadius: 4,
      cursor: 'pointer',
      fontFamily: "'Amatic SC', cursive",
      fontWeight: 'bold'
    },
    hover: {
      border: '1px solid white',
      color: 'white',
    }
  },

  render() {
    var hoverStateStyle = merge(
        this.state.hovered && this.styles.hover,
        this.styles.country
    );
    return(
      <li style={hoverStateStyle}
      onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover}
      >{this.props.name}</li>
    );
  }
});

var COUNTRIES_DATA = [{name: 'Costa Rica'}, {name: 'Nicaragua'}];

module.exports = React.createClass({
  render() {
    var countries = COUNTRIES_DATA.map((country) => {
      return <Country key={country.name} name={country.name}/>
    });
    return(
      <div id='countries-drawer' style={this.props.drawerStyles}>
        <ul id='countries-container' style={countriesContainerStyles}>
          {countries}
        </ul>
      </div>
    );
  }
});
