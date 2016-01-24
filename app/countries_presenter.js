import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'merge';
import Countries from './countries';

let CountriesPresenter = React.createClass({
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

  componentDidMount: function () {
    let width = ReactDOM.findDOMNode(this).offsetWidth;
    this.setState({ width });
  },

  render() {
    let styles = {
      container: {
        position: 'absolute',
        bottom: '2%',
        width: '100%',
      },
      presenter: {
        backgroundColor: 'rgba(237, 163, 59, .5)',
        width: '4em',
        height: '4em',
        borderRadius: '3em',
        padding: 0,
        fontFamily: "'Amatic SC', cursive",
        marginLeft: this.state.width/2,
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

    let presenterStyles = merge(
        styles.presenter,
        this.state.hovered && styles.hover
    );

    let exploreStyle = this.state.hovered ? styles.hide : styles.display;

    return(
      <div id='countries-container' style={styles.container}>
        <div id='countries-presenter'
          style={presenterStyles}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          >
          <span style={exploreStyle}>explore</span>
        </div>
        <Countries />
      </div>
    );
  }
});

module.exports = CountriesPresenter;
