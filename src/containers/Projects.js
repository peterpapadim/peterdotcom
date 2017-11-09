import React, { Component } from 'react';
import Reelsquad from '../assets/mockup_reelsquad.png';
import CodePeter from '../assets/mockup_codepeter.png';
import PageClub from '../assets/mockup_pageclub.png';
import Instalytics from '../assets/mockup_instalytics.png';
import ReelsquadText from '../assets/reelsquad_text.svg';


class Projects extends Component{

  render(){
    return(
        <div className="row no-gutters projects-container" id="projects-container">
          <div className="col-12 col-md-6 projects-left">
            <div className="row no-gutters" id="reelsquad-project-container">
              <div className="col-12">
                <img src={Reelsquad} alt="reelsquad" id="reelsquad" />
              </div>
            </div>
            <div className="row no-gutters" id="reelsquad-project-text">
              <div className="col-12">
                <img src={ReelsquadText} alt="reelsquad-text" id="reelsquad-text" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 projects-right">
            <div className="row no-gutters">
              <div className="col-12 codepeter">
                <img src={CodePeter} alt="codepeter" id="codepeter" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-12 pageclub">
                <img src={PageClub} alt="pageclub" id="pageclub" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 projects-right">
            <div className="row no-gutters">
              <div className="col-12 instalytics">
                <img src={Instalytics} alt="instalytics" id="instalytics" />
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default Projects;
