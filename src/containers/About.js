import React, { Component } from 'react';
import { Bio } from '../components/Bio';
import Headshot from '../assets/peter_headshot.png';
import NavdotInactive from '../assets/navdot_inactive_white.svg';
import NavdotActive from '../assets/navdot_active_white.svg';
import Arrow from '../assets/down_white.svg';
var smoothScroll = require('smoothscroll');

class About extends Component {

  navDots = () => {
    return(
      <div className="col-3">
        <div className="navDots-about">
          <div className="row navDot">
            <img src={NavdotInactive}
            alt="navdot"
            onClick={() => this.handleDotClick("intro-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotActive}
            alt="navdot"
            onClick={() => this.handleDotClick("about-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive}
            alt="navdot"
            onClick={() => this.handleDotClick("skills-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotInactive}
            alt="navdot"
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
      <div id="about-container" className="container-fluid">
        <div className="row" id="headshot-container">
          <div className="col-4">
              <img id="headshot"src={Headshot} alt="headshot"/>
          </div>
        </div>
        <div id="bio-container" className="row">
          <div className="col-9">
            <div id="bio">
              <Bio />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="arrow-container col-12">
            <img className="arrow" src={Arrow}
              alt="arrow-icon" onClick={() => this.handleDotClick("skills-container")} />
          </div>
        </div>
      </div>
    )
  }
}

export default About;
