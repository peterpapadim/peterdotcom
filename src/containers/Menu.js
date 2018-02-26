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
    return <img id="logo" src={LogoWhite} onClick={this.props.handleMenuClick}/>
  }

  handleHover = (social) => {
    this.setState(social)
  }

  render(){
    return(
      <div id="menu-page" className="container-fluid animated fadeInRight section">
          <div className="row" id="exit-container">
            <div className="col-1"></div>
            <div className="col-1">{this.displayLogo()}</div>
            <div className="col-8"></div>
            <div className="col-1" id="menu-container">
              <img id="menu" src={Exit} onClick={this.props.handleMenuClick}/>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row" id="menu-links-row">
            <div className="col-4"></div>
            <div className="col-5">
              <div id="menu-links-container">
                <p id="menu-links">
                  <span>Home </span>
                  <span>About </span>
                  <span>Contact </span>
                  <span>Blog </span>
                  <span>Resume </span>
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
                      <img className="social-icon"src={this.state.linkedinHovered ? LinkedInIconHovered : LinkedInIcon} onMouseEnter={() => this.handleHover({linkedinHovered:true})} onMouseLeave={() => this.handleHover({linkedinHovered:false})}/>
                      <img className="social-icon"src={this.state.instagramHovered ? InstagramIconHovered : InstagramIcon} onMouseEnter={() => this.handleHover({instagramHovered:true})} onMouseLeave={() => this.handleHover({instagramHovered:false})}/>
                      <img className="social-icon"src={this.state.githubHovered ? GithubIconHovered : GithubIcon} onMouseEnter={() => this.handleHover({githubHovered:true})} onMouseLeave={() => this.handleHover({githubHovered:false})}/>
                      <img className="social-icon"src={this.state.mediumHovered ? MediumIconHovered : MediumIcon} onMouseEnter={() => this.handleHover({mediumHovered:true})} onMouseLeave={() => this.handleHover({mediumHovered:false})}/>
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
