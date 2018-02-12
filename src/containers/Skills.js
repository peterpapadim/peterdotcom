import React, { Component } from 'react';
import { TechSkills } from '../components/TechSkills';
import Arrow from '../assets/down_white.svg';
import Protractor from '../assets/protractor_icon.svg'
import NavdotInactive from '../assets/navdot_inactive_white.svg';
import NavdotActive from '../assets/navdot_active_white.svg';
var smoothScroll = require('smoothscroll');

class Skills extends Component {

  render(){
    return(
      <div className="container-fluid" id="skills-container">
        <div className="row" id="protractor-icon-container">
          <div className="col-4">
          </div>
          <div className="col-6">
            <img src={Protractor} alt="protractor-icon" id="protractor-icon"/>
          </div>
          <div className="col-2">
          </div>
        </div>
        <div className="row" id="my-skills-container">
          <div className="col-10">
            <TechSkills />
          </div>
        </div>
        <div className="row">
          <div className="arrow-container col-12">
            <img className="arrow" src={Arrow}
              alt="arrow-icon"
              onClick={() => this.props.handleArrowClick("projects-container-1")} />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
