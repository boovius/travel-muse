import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'merge';
import Country from './country';
import {Motion, spring} from 'react-motion';

let COUNTRIES_DATA = [
  {name: 'Costa Rica'}, {name: 'Nicaragua'}
];

let Countries = React.createClass({
  getInitialState() {
    return {
      hovered: true
    }
  },

  countryMotion(i) {{
    return {left: spring((i+1)* 200)}
  }},

  componentDidMount: function () {
    let width = ReactDOM.findDOMNode(this).offsetWidth;
    this.setState({ width });
    console.log(this.state.width);
  },

  render() {
    let styles = {
      container: {
        width: '100%',
        height: 20,
        padding: 0,
      },
      display: {
        display: 'block',
      },
      hide: {
        display: 'none',
      },
      child: {
        width: '5%',
        position: 'absolute',
        top: '25%',
      }
    };

    let countries = COUNTRIES_DATA.map((country, i) => {
      return (
        <Motion
          defaultStyle={{left: this.state.width}}
          style={this.countryMotion(i)}
          key={country.name}
          >
          {style =>
              <Country
                name={country.name}
                display={!this.state.hovered}
                childStyles={merge(styles.child, {left: style.left})}
              />
          }
        </Motion>
      )
    });

    return(
      <ul id='countries-container'
        style={styles.container}
        >
        {countries}
      </ul>
    );
  }
});

module.exports = Countries;
