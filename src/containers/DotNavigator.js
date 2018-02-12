import React, { Component } from 'react';
import NavdotInactive from '../assets/navdot_inactive_white.svg';
import NavdotActive from '../assets/navdot_active_white.svg';
var smoothScroll = require('smoothscroll');

class DotNavigator extends Component {


  navDots = () => {
    return(
      <div className="navDots-container">
        <div className="row navDot">
          <img
          src={this.props.inViewDiv === "intro" ? NavdotActive : NavdotInactive}
          alt="navdot"
          onClick={() => this.props.handleDotClick("intro-container")} />
        </div>
        <div className="row navDot">
          <img
          src={this.props.inViewDiv === "about" ? NavdotActive : NavdotInactive}
          alt="navdot"
          onClick={() => this.props.handleDotClick("about-container")} />
        </div>
        <div className="row navDot">
          <img
          src={this.props.inViewDiv === "skills" ? NavdotActive : NavdotInactive}
          alt="navdot"
          onClick={() => this.props.handleDotClick("skills-container")} />
        </div>
        <div className="row navDot">
          <img
          src={this.props.inViewDiv === "projects" ? NavdotActive : NavdotInactive}
          alt="navdot"
          onClick={() => this.props.handleDotClick("projects-container-1")} />
        </div>
      </div>
    )
  }


  render(){
    return(
      <div id="fixed-navdot-container" className="container-fluid">
        {this.navDots()}
      </div>
    )
  }
}

export default DotNavigator;
