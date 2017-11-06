import React, { Component } from 'react';
import Headshot from '../assets/peter_headshot.png';
import NavdotInactive from '../assets/navdot_inactive_white.svg';
import NavdotActive from '../assets/navdot_active_white.svg';
import Arrow from '../assets/down_white.svg';
var smoothScroll = require('smoothscroll');

class About extends Component {

  navDots = () => {
    return(
      <div className="col-2">
        <div className="navDots-about">
          <div className="row navDot">
            <img src={NavdotInactive}
            onClick={() => this.handleDotClick("intro-container")} />
          </div>
          <div className="row navDot">
            <img src={NavdotActive} />
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
      <div id="about-container" className="container-fluid">
        <div className="row" id="headshot-container">
          <div className="col-4">
              <img id="headshot"src={Headshot} />
          </div>
        </div>
        <div id="bio-container" className="row">
          <div className="col-10">
            <div id="bio">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a euismod est, non convallis ante. In quis facilisis est. In porttitor, velit sed vehicula porta, ante diam posuere nisi, quis gravida nulla arcu vel tellus. Curabitur sodales massa dolor, a accumsan elit euismod a. Nullam nisl massa, accumsan ut enim at, ullamcorper volutpat sem. Cras congue magna ac dui volutpat, ac ultricies nibh imperdiet. Curabitur facilisis dictum libero porta scelerisque.</p>
            </div>
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

export default About;
