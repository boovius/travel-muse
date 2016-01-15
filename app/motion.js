import React from 'react';
import merge from 'merge';
import {Motion, StaggeredMotion,  spring} from 'react-motion';

var MotionBoxes = React.createClass({
  getInitialState (){
    return {
      isOpen: false
    }
  },

  handleClick () {
    console.log('clicked');
    this.setState({isOpen: !this.state.isOpen});
  },

  render() {
    let parentWidth = 200;
    let parentHeight = 200;
    let childWidth = parentWidth/2;
    let childHeight = parentHeight/2;

    let parentStyle = {
      width: parentWidth,
      height: parentHeight,
      position: 'absolute',
      top: 100,
      left: 500,
      backgroundColor: 'blue',
    };

    let childStyleBase = {
      width: parentWidth/2,
      height: 100,
      position: 'absolute',
      top: (parentHeight - childHeight)/2,
      backgroundColor: 'red',
      left: (parentWidth - childWidth)/2,
      zIndex: -1,
    };

    return(
      <div id='parent' style={parentStyle} onClick={this.handleClick}>
        <Motion
          defaultStyle={this.state.isOpen ? {left: spring(-300)} : {left: spring(childWidth)}}
          style={this.state.isOpen ? {left: spring(-300)} : {left: spring(childWidth)}}
          >
          {(style) => {
            return (
              <div
                id='child'
                style={merge(childStyleBase, {left: style.left})}>
              </div>
            )
          }}
        </Motion>
      </div>
    );
  }
});

module.exports = MotionBoxes;
