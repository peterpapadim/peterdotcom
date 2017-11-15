import React, { Component } from 'react';
import LinkedInIcon from '../assets/icon_linkedin.svg';
import InstagramIcon from '../assets/icon_instagram.svg';
import GithubIcon from '../assets/icon_github.svg';
import MediumIcon from '../assets/icon_medium.svg';
import Resume from '../assets/resume_peter_papadimitropoulos.pdf';

const linkedin = "https://www.linkedin.com/in/peterpapadimitropoulos/"
const instagram = "https://www.instagram.com/peter_papadim/"
const github = "https://github.com/peterpapadim"
const medium = "https://medium.com/@peterpapadimitropoulos"

class Footer extends Component {

  constructor(){
    super();
    this.state = {
      linkedinHovered: false,
      instagramHovered: false,
      githubHovered: false,
      mediumHovered: false
    }
  }

  render(){
    return(
      <div className="container-fluid" id="footer-container">
        <div className="row" id="footer">
          <div className="col-4" id="resume-container">
            <div id="resume-button" onClick={() => window.open(Resume)}>View Resume</div>
          </div>
          <div className="col-8" id="icons-container">
            <img className="footer-icon" id="linkedin-icon" src={LinkedInIcon} alt="linkedin-icon" onClick={() => window.open(linkedin)}/>
            <img className="footer-icon" id="instagram-icon" src={InstagramIcon} alt="instagram-icon" onClick={() => window.open(instagram)}/>
            <img className="footer-icon" id="github-icon" src={GithubIcon} alt="github-icon" onClick={() => window.open(github)}/>
            <img className="footer-icon" id="medium-icon" src={MediumIcon} alt="medium-icon" onClick={() => window.open(medium)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
