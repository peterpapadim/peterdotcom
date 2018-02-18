import React, { Component } from 'react';
import Reelsquad from '../assets/mockup_reelsquad.png';
import CodePeter from '../assets/mockup_codepeter.png';
import PageClub from '../assets/mockup_pageclub.png';
import Instalytics from '../assets/mockup_instalytics.png';
import ReelsquadText from '../assets/reelsquad_text.svg';
import DemoButton from '../assets/button_viewdemo.svg';
import FrontendButton from '../assets/button_frontend.svg';
import BackendButton from '../assets/button_backend.svg';
import Line from '../assets/line.svg';

const reelsquadDemo = "https://www.dropbox.com/s/0gpy2439bv221md/reelsquad_demo.mov?dl=0"
const reelsquadFrontend = "https://github.com/peterpapadim/reelsquad"
const reelsquadBackend = "https://github.com/peterpapadim/reelsquad-api"

const codepeterFrontend = "https://github.com/peterpapadim/peterdotcom"

const pageclubDemo = "https://www.dropbox.com/s/euqy0w3inmrhhke/pageclub_2.0.mov?dl=0"
const pageclubFrontend = "https://github.com/peterpapadim/pageclub"
const pageclubBackend = "https://github.com/peterpapadim/pageclub-api"

const instalyticsDemo = "https://www.dropbox.com/s/ctjdjaar4jae4b8/instalytics_demo.mov?dl=0"
const instalyticsFrontend = "https://github.com/peterpapadim/instalytics-fe"
const instalyticsBackend = "https://github.com/cwooley/Instalytics-Api"

const facebookBlogPost = "https://medium.com/front-end-hacking/facebook-authorization-in-a-react-app-b7a9176aacb6"

class Projects extends Component{


  constructor(){
    super();
    this.state = {
      reelsquadHovered: false,
      pageclubHovered: false,
      instalyticsHovered: false,
      codepeterHovered: false,
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
      case "codepeter":
        this.setState({ codepeterHovered: true })
        break
      default:
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
      case "codepeter":
        this.setState({ codepeterHovered: false })
        break
      default:
        break
    }
  }

  showLayover = (projectHovered, demoLink, frontendLink, backendLink) => {
    if(projectHovered){
      return(
        <div className="layover">
          {this.demoButton(demoLink, frontendLink, backendLink)}
        </div>
      )
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

  handleReadMoreClick = () => {
    window.open(facebookBlogPost)
  }

  demoButton = (demoLink, frontendLink, backendLink) => {
    return <div id="button-container">
              <div>
                { demoLink ?
                <img src={DemoButton}
                    alt="demo-button"
                    id="demo-button"
                    className="project-button"
                    onMouseOver={this.setButtonHoverOver}
                    onMouseLeave={this.setButtonHoverOut}
                    onClick={() => this.openDemo(demoLink)}
                />
                : null }
              </div>
              <div>
                { frontendLink ?
                <img src={FrontendButton}
                    alt="frontend-button"
                    id="frontend-button"
                    className="project-button"
                    onMouseOver={this.setButtonHoverOver}
                    onMouseLeave={this.setButtonHoverOut}
                    onClick={() => this.openDemo(frontendLink)}
                />
                : null }
              </div>
              <div>
                { backendLink ?
                <img src={BackendButton}
                    alt="backend-button"
                    id="backend-button"
                    className="project-button"
                    onMouseOver={this.setButtonHoverOver}
                    onMouseLeave={this.setButtonHoverOut}
                    onClick={() => this.openDemo(backendLink)}
                />
                : null }
            </div>
          </div>
  }

  render(){
    return(
    <div className="section">

      <div className="container-fluid" id="all-projects-page-1">
        <div className="row" id="projects-container-1">
          <div className="col-12 col-md-6 projects-left" onMouseOver={() => this.setHoverOver("reelsquad")} onMouseLeave={() => this.setHoverOut("reelsquad")}>
            <div className="row" id="reelsquad-project-container">
              <div className="col-12">
                <img src={Reelsquad} alt="reelsquad" id="reelsquad" />
              </div>
            </div>
            <div className="row" id="reelsquad-project-text">
              <div className="col-12">
                <img src={ReelsquadText} alt="reelsquad-text" id="reelsquad-text" />
              </div>
            </div>
                  {this.showLayover(this.state.reelsquadHovered, reelsquadDemo, reelsquadFrontend, reelsquadBackend)}
          </div>
          <div className="col-12 col-md-6 projects-right">
            <div className="row">
              <div className="col-12 codepeter" onMouseOver={() => this.setHoverOver("codepeter")} onMouseLeave={() => this.setHoverOut("codepeter")}>
                <img src={CodePeter} alt="codepeter" id="codepeter" />
                  {this.showLayover(this.state.codepeterHovered, null, codepeterFrontend, null)}
              </div>
            </div>
            <div className="row">
              <div className="col-12 pageclub" onMouseOver={() => this.setHoverOver("pageclub")} onMouseLeave={() => this.setHoverOut("pageclub")}>
                <img src={PageClub} alt="pageclub" id="pageclub" />
                  {this.showLayover(this.state.pageclubHovered, pageclubDemo, pageclubFrontend, pageclubBackend)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="all-projects-page-2">
        <div className="row" id="projects-container-2">
          <div className="col-12 col-md-6 projects-right-page-2">
            <div className="row">
              <div className="col-12 instalytics" onMouseOver={() => this.setHoverOver("instalytics")} onMouseLeave={() => this.setHoverOut("instalytics")}>
                <img src={Instalytics} alt="instalytics" id="instalytics" />
                  {this.showLayover(this.state.instalyticsHovered, instalyticsDemo, instalyticsFrontend, instalyticsBackend)}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 projects-right-page-2">
            <div className="row">
              <div className="col-12 blog">
                <div className="row" id="blog-title-container">
                  <div id="blog-title">BLOG</div>
                </div>
                <div className="row" id="blog-brand-line-container">
                  <div className="col-4">
                    <img id="blog-brand-line" src={Line} alt="blog-brand-line" />
                  </div>
                </div>
                <div className="row" id="blog-post-container">
                  <div className="col-8">
                    <p id="blog-post-title">
                      Facebook Authentication in a React App
                    </p>
                  </div>
                </div>
                <div className="row" id="blog-post-content-container">
                  <div className="col-9">
                    <p id="blog-post-content">
                      The Facebook API documentation is a great source of information for accomplishing most Facebook partnered related tasks.
                    </p>
                  </div>
                </div>
                <div className="row" id="read-more-container">
                  <div className="col-7">
                  </div>
                  <div className="col-5">
                    <p id="read-more" onClick={this.handleReadMoreClick}>
                      Read More →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
  }

}

export default Projects;
