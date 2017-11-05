import React, { Component } from 'react';
import { Header } from '../components/Header';
import { IntroBlurb } from '../components/IntroBlurb';
import NavdotInactive from '../assets/navdot_inactive_white.svg';
import NavdotActive from '../assets/navdot_active_white.svg';
import Arrow from '../assets/down_white.svg';
var smoothScroll = require('smoothscroll');

class Intro extends Component {

  navDots = () => {
    return(
      <div className="col-6">
        <div className="navDots">
          <div className="row navDot">
            <img src={NavdotActive} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive}
            onClick={() => this.handleDotClick("about-container")}/>
          </div>
          <div className="row navDot">
            <img src={NavdotInactive} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive} />
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
          <div id="intro-blurb-container-content" className="col-6">
            <IntroBlurb />
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
