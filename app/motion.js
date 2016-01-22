import React from 'react';
import merge from 'merge';

const INDEX = [0,1,2,3];

const MotionBoxes = React.createClass({
  getInitialState (){
    return {
      isOpen: false
    }
  },

  handleClick () {
    console.log('clicked');
    this.setState({isOpen: !this.state.isOpen});
  },

  defaultStyle() {{
    if (this.state.isOpen) {
      return {left: spring(-300)};
    } else {
      return {left: spring(this.childWidth())};
    }
  }},

  style(index) {{
    if (this.state.isOpen) {
      if (index === 0) {
        return {left: spring(0)}
      }
      let factor = index % 2 === 0 ? 1 : -1;
      return {left: spring(Math.floor(((index/2) + .5)) * factor * 100)};
    } else {
      return {left: spring(this.childWidth())};
    }
  }},

  baseStyles() {
    return {
      parentWidth: 200,
      parentHeight: 200,
    }
  },

  parentStyle() {
    return {
      width: this.baseStyles().parentWidth,
      height: this.baseStyles().parentHeight,
      position: 'absolute',
      top: 100,
      left: 500,
      //backgroundColor: 'blue',
    }
  },

  childWidth() {{
    let childWidth = this.baseStyles().parentWidth/2 - 20;
    //console.log('value of childWidth is ', childWidth);
    return childWidth;
  }},

  childHeight() {{
    let height = this.baseStyles().parentHeight/2 - 20;
    //console.log('value of childHeight is ', height);
    return height;
  }},

  childTop() {{
    let top = (this.baseStyles().parentHeight - this.childHeight())/2;
    //console.log('value of childTop is ', top);
    return top;
  }},

  childLeft() {{
    let left = (this.baseStyles().parentWidth - this.childWidth())/2;
    //console.log('value of childLeft is ', left);
    return left;
  }},

  childStyleBase() {
    return {
      width: this.childWidth(),
      height: this.childHeight(),
      position: 'absolute',
      top: this.childTop(),
      backgroundColor: 'red',
      left: this.childLeft(),
      zIndex: -1,
    }
  },

  render() {
    return(
      <div id='parent' style={this.parentStyle()} onClick={this.handleClick}>
        {INDEX.map(index => {
          return (
            <Motion
              defaultStyle={this.defaultStyle()}
              style={this.style(index)}
              >
              {style =>
                <div style={merge(this.childStyleBase(), {left: style.left})} />
              }
            </Motion>
          );
        })}
      </div>
    );
  }
});

module.exports = MotionBoxes;
