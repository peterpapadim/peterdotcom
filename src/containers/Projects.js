import React, { Component } from 'react';
import Reelsquad from '../assets/mockup_reelsquad.png';
import CodePeter from '../assets/mockup_codepeter.png';
import PageClub from '../assets/mockup_pageclub.png';
import Instalytics from '../assets/mockup_instalytics.png';
import ReelsquadText from '../assets/reelsquad_text.svg';
import DemoButton from '../assets/button_viewdemo.svg';

const reelsquad = "https://www.dropbox.com/s/0gpy2439bv221md/reelsquad_demo.mov?dl=0"
const pageclub = "https://www.dropbox.com/s/euqy0w3inmrhhke/pageclub_2.0.mov?dl=0"
const instalytics = "https://www.dropbox.com/s/ctjdjaar4jae4b8/instalytics_demo.mov?dl=0"

class Projects extends Component{

  constructor(){
    super();
    this.state = {
      // hovered: false,
      buttonHovered: false
    }
  }
  //
  // setHoverOver = () => {
  //   this.setState({ hovered: true })
  // }
  //
  // setHoverOut = () => {
  //   this.setState({ hovered: false })
  // }

  setButtonHoverOver = () => {
    this.setState({ buttonHovered: true })
  }

  setButtonHoverOut = () => {
    this.setState({ buttonHovered: false })
  }

  openDemo = (link) => {
    window.open(link)
  }

  demoButton = (link) => {
    return <img src={DemoButton}
                alt="DemoButton"
                className="demo-button"
                onMouseOver={this.setButtonHoverOver}
                onMouseLeave={this.setButtonHoverOut}
                onClick={() => this.openDemo(link)}
            />
  }

  render(){
    return(
        <div className="row no-gutters projects-container" id="projects-container">
          <div className="col-12 col-md-6 projects-left" onMouseOver={this.setHoverOver} onMouseLeave={this.setHoverOut}>
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
            <div className="row no-gutters demo-button-container">
              <div className="col-12">
                {this.demoButton(reelsquad)}
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
                <div id="demo-button-pageclub">{this.demoButton(pageclub)}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 projects-right">
            <div className="row no-gutters">
              <div className="col-12 instalytics">
                <img src={Instalytics} alt="instalytics" id="instalytics" />
                <div id="demo-button-instalytics">{this.demoButton(instalytics)}</div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default Projects;
