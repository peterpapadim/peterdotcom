import React, { Component } from 'react';
import { Header } from '../components/Header';
import { IntroBlurb } from '../components/IntroBlurb';
import NavdotInactive from '../assets/navdot_inactive_white.svg';
import NavdotActive from '../assets/navdot_active_white.svg';
import Arrow from '../assets/down_white.svg';
import Rocket from '../assets/rocket_icon.svg';
var smoothScroll = require('smoothscroll');

class Intro extends Component {

  navDots = () => {
    return(
      <div className="col-2">
        <div className="navDots-intro">
          <div className="row navDot">
            <img src={NavdotActive}
            onClick={() => this.handleDotClick("intro-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive}
            onClick={() => this.handleDotClick("about-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive}
            onClick={() => this.handleDotClick("skills-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive}
            onClick={() => this.handleDotClick("projects-container-1")} />
          </div>
        </div>
      </div>
    )
  }


  handleDotClick = (id) => {
    let element = document.getElementById(id)
    smoothScroll(element, 1000)
  }


  render(){
    return(
      <div id="intro-container" className="container-fluid">
        <div id="header-container"className="row">
          <div className="col-2">
            <Header />
          </div>
        </div>
        <div id="intro-blurb-container" className="row">
          <div id="intro-blurb-container-content" className="col-5">
            <IntroBlurb />
          </div>
          <div className="col-5">
            <img src={Rocket} id="rocket-icon"/>
          </div>
          {this.navDots()}
        </div>
        <div className="row">
          <div className="arrow-container col-12">
            <img className="arrow" src={Arrow}
              onClick={() => this.handleDotClick("about-container")} />
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
