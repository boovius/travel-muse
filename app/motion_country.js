import React from 'react';
import merge from 'merge';
import Country from './country';
import {Motion, spring} from 'react-motion';

let MotionCountry = React.createClass({
  render() {
    return(
      <Motion
        style={{left: spring(-300)}}
        >
        {style =>
          <Country
            name={this.props.name}
            display={this.props.display}
            childStyles={this.props.childStyles}
          />
        }
      </Motion>
    );
  }
});

module.exports = MotionCountry;
