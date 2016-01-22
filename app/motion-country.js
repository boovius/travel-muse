import React from 'react';
import merge from 'merge';
import Country from './country';

let MotionCountry = React.createClass({
  render() {
    return(
      <Motion
        defaultStyle={}
        style={}
        >
        <Country
          name={country.name}
          display={!this.state.hovered}
        />
      </Motion>
    );
  }
});
