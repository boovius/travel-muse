var React = require('react');
var merge = require('merge');


var Country = React.createClass({
  getInitialState (){
    return {
      hovered: false
    }
  },

  toggleHover (){
    this.setState({hovered: !this.state.hovered});
  },

  render() {
    styles = {
      country: {
        padding: 5,
        listStyle: 'none',
        border: '1px solid black',
        borderRadius: 4,
        cursor: 'pointer',
        fontFamily: "'Amatic SC', cursive",
        fontWeight: 'bold',
      },
      hover: {
        border: '1px solid white',
        color: 'white',
      },
      display: {
        display: 'none'
      }
    };

    var hoverStateStyle = merge(
        this.state.hovered && styles.hover,
        styles.country,
        this.props.display && styles.display
    );

    return(
      <li style={hoverStateStyle}
      onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover}
      >{this.props.name}</li>
    );
  }
});

module.exports = Country;
