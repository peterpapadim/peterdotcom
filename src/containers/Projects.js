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
      reelsquadHovered: false,
      pageclubHovered: false,
      instalyticsHovered: false,
      buttonHovered: false
    }
  }

  setHoverOver = (project) => {
    switch(project){
      case "reelsquad":
        this.setState({ reelsquadHovered: true })
        break
      case "pageclub":
        this.setState({ pageclubHovered: true })
        break
      case "instalytics":
        this.setState({ instalyticsHovered: true })
        break
    }
  }

  setHoverOut = (project) => {
    switch(project){
      case "reelsquad":
        this.setState({ reelsquadHovered: false })
        break
      case "pageclub":
        this.setState({ pageclubHovered: false })
        break
      case "instalytics":
        this.setState({ instalyticsHovered: false })
        break
    }
  }

  showLayover = (projectHovered) => {
    if(projectHovered){
      return <div className="layover"></div>
    }
  }

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
          <div className="col-12 col-md-6 projects-left" onMouseOver={() => this.setHoverOver("reelsquad")} onMouseLeave={() => this.setHoverOut("reelsquad")}>
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
                  {this.showLayover(this.state.reelsquadHovered)}
          </div>
          <div className="col-12 col-md-6 projects-right">
            <div className="row no-gutters">
              <div className="col-12 codepeter">
                <img src={CodePeter} alt="codepeter" id="codepeter" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-12 pageclub" onMouseOver={() => this.setHoverOver("pageclub")} onMouseLeave={() => this.setHoverOut("pageclub")}>
                <img src={PageClub} alt="pageclub" id="pageclub" />
                  {this.showLayover(this.state.pageclubHovered)}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 projects-right">
            <div className="row no-gutters">
              <div className="col-12 instalytics" onMouseOver={() => this.setHoverOver("instalytics")} onMouseLeave={() => this.setHoverOut("instalytics")}>
                <img src={Instalytics} alt="instalytics" id="instalytics" />
                  {this.showLayover(this.state.instalyticsHovered)}
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default Projects;
