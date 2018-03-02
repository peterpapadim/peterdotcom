import React, {Component} from 'react';
import Exit from '../assets/menu/close_white.svg';
import LogoWhite from '../assets/logo/logo_white.svg';
import LinkedInIcon from '../assets/social/icon_linkedin.svg';
import InstagramIcon from '../assets/social/icon_instagram.svg';
import GithubIcon from '../assets/social/icon_github.svg';
import MediumIcon from '../assets/social/icon_medium.svg';
import LinkedInIconHovered from '../assets/social/icon_linkedin_hovered.svg';
import InstagramIconHovered from '../assets/social/icon_instagram_hovered.svg';
import GithubIconHovered from '../assets/social/icon_github_hovered.svg';
import MediumIconHovered from '../assets/social/icon_medium_hovered.svg';
import Resume from '../assets/resume/panagiotis_papadimitropoulos_resume.pdf';

const linkedin = "https://www.linkedin.com/in/peterpapadimitropoulos/"
const instagram = "https://www.instagram.com/peter_papadim/"
const github = "https://github.com/peterpapadim"
const medium = "https://medium.com/@peterpapadimitropoulos"

const links = {
  home: "/",
  about: "/about",
  contact: "/contact"
}

class Menu extends Component {

  constructor(){
    super();
    this.state = {
      linkedinHovered: false,
      instagramHovered: false,
      githubHovered: false,
      mediumHovered: false,
    }
  }

  displayLogo = () => {
    return <img id={this.props.mobile ? "logo-mobile" : "logo"} src={LogoWhite} onClick={this.props.handleLogoClick} alt="logo-white"/>
  }

  handleHover = (social) => {
    this.setState(social)
  }

  handleMenuLinkClick = (link) => {
    if(link === "home"){
      this.props.handleLogoClick()
    }
    else if(link === "contact"){
      window.location.href = links[link]
    }
    else if(link === "about"){
      window.location.href = links[link]
    }
  }

  handleSocialClick = (social) => {
    window.open(social)
  }

  render(){
    return(
      <div id="menu-page" className="container-fluid animated fadeInRight section">
          <div className="row" id="exit-container">
            <div className="col-1"></div>
            <div className="col-1">{this.displayLogo()}</div>
            <div className="col-8"></div>
            <div className="col-1" id="menu-container">
              <img id={this.props.mobile ? "exit-mobile" : "exit"} src={Exit} onClick={this.props.handleMenuClick} alt="exit-icon"/>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row" id="menu-links-row">
            <div className="col-4"></div>
            <div className="col-5">
              <div id="menu-links-container">
                <p id="menu-links">
                  <span onClick={() => this.handleMenuLinkClick("home")}>Home</span><span> </span>
                  <span onClick={() => this.handleMenuLinkClick("about")}>About</span><span> </span>
                  <span onClick={() => this.handleMenuLinkClick("contact")}>Contact</span><span> </span>
                  <span onClick={() => this.handleSocialClick(medium)}>Blog</span><span> </span>
                  <span onClick={() => this.handleSocialClick(Resume)}>Resume</span><span> </span>
                </p>
             </div>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row" id="social-container">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="row" id="social-icons-row">
                <div className="col-12" id="social-icons-column">
                  <div id="social-icons-container">
                    <div id="social-icons">
                      <img alt="linkedin-icon" className="social-icon"src={this.state.linkedinHovered ? LinkedInIconHovered : LinkedInIcon} onMouseEnter={() => this.handleHover({linkedinHovered:true})} onMouseLeave={() => this.handleHover({linkedinHovered:false})} onClick={() => this.handleSocialClick(linkedin)}/>
                      <img alt="instagram-icon" className="social-icon"src={this.state.instagramHovered ? InstagramIconHovered : InstagramIcon} onMouseEnter={() => this.handleHover({instagramHovered:true})} onMouseLeave={() => this.handleHover({instagramHovered:false})} onClick={() => this.handleSocialClick(instagram)}/>
                      <img alt="github-icon" className="social-icon"src={this.state.githubHovered ? GithubIconHovered : GithubIcon} onMouseEnter={() => this.handleHover({githubHovered:true})} onMouseLeave={() => this.handleHover({githubHovered:false})} onClick={() => this.handleSocialClick(github)}/>
                      <img alt="medium-icon" className="social-icon"src={this.state.mediumHovered ? MediumIconHovered : MediumIcon} onMouseEnter={() => this.handleHover({mediumHovered:true})} onMouseLeave={() => this.handleHover({mediumHovered:false})} onClick={() => this.handleSocialClick(medium)}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="social-buffer-row"></div>
            </div>
            <div className="col-4"></div>
          </div>
      </div>
    )
  }
}

export default Menu;
