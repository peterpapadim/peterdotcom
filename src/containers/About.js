import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import Menu from './Menu';
import ProfilePicture from '../assets/about/about_profile_picture.jpg';

class About extends Component {

  render(){
    return(
      <div id="about-page-container">
        <div className="container-fluid" id="about-page">
          <div className="row" id="about-menu-row">
            <MenuButtons about={true} handleMenuClick={this.props.handleMenuClick} menuClicked={this.props.menuClicked} handleLogoClick={this.props.handleLogoClick} mobile={this.props.mobile}/>
          </div>
          <div className="row" id="about-bio-container">
            <div className="col-2"></div>
            <div className="col-8">
              <p id="about-bio-title">About</p>
              <p id="about-bio-blurb">Born and raised hipster from the heart of Brooklyn, New York. I am a Full Stack Developer with a background in Supply Chain & Logistics. I taught myself how to code using a couple of beginner books and online tutorials which led to my attending and graduating from the Flatiron School’s immersive web program. I specialize in JavaScript and Ruby on Rails programming. I speak greek, am a sucker for food and enjoy traveling the world.</p>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row" id="tech-skills-container">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row" id="tech-skills-title-row"><p id="tech-skills-title">Technical Skills</p></div>
            </div>
            <div className="col-2"></div>
          </div>
          {
            this.props.mobile ?
            <div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-3"><span className="skill">Ruby</span></div>
                <div className="col-3"><span className="skill">Rails</span></div>
                <div className="col-3"><span className="skill">Active Record</span></div>
                <div className="col-1"></div>
              </div>
              <div className="row tech-skills-row-margin-mobile">
                <div className="col-2"></div>
                <div className="col-3"><span className="skill">SQL</span></div>
                <div className="col-3"><span className="skill">Javascript</span></div>
                <div className="col-3"><span className="skill">React</span></div>
                <div className="col-1"></div>
              </div>
              <div className="row tech-skills-row-margin-mobile">
                <div className="col-2"></div>
                <div className="col-3"><span className="skill">Redux</span></div>
                <div className="col-3"><span className="skill">CSS</span></div>
                <div className="col-3"><span className="skill">HTML</span></div>
                <div className="col-1"></div>
              </div>
              <div className="row tech-skills-row-margin-mobile">
                <div className="col-2"></div>
                <div className="col-3"><span className="skill">Git</span></div>
                <div className="col-3"><span className="skill">Heroku</span></div>
                <div className="col-3"><span className="skill">AWS</span></div>
                <div className="col-1"></div>
              </div>
            </div> :
            <div>
              <div className="row">
                <div className="col-2"></div>
                <div className="col-1"><span className="skill">Ruby</span></div>
                <div className="col-1"><span className="skill">Rails</span></div>
                <div className="col-1"><span className="skill">SQL</span></div>
                <div className="col-1"><span className="skill">Active</span><br/><span className="skill">Record</span></div>
                <div className="col-1"><span className="skill">Javascript</span></div>
                <div className="col-1"><span className="skill">React</span></div>
                <div className="col-1"><span className="skill">Redux</span></div>
                <div className="col-1"><span className="skill">CSS</span></div>
                <div className="col-2"></div>
              </div>
              <div className="row tech-skills-row-margin">
                <div className="col-2"></div>
                <div className="col-1"><span className="skill">HTML</span></div>
                <div className="col-1"><span className="skill">Git</span></div>
                <div className="col-1"><span className="skill">Heroku</span></div>
                <div className="col-1"><span className="skill">AWS</span></div>
                <div className="col-6"></div>
              </div>
            </div>
          }
          <div className="row" id="about-picture-row">
            <div className="col-2"></div>
            <div className="col-4"><img src={ProfilePicture} alt="profile-peter"/></div>
            <div className="col-6"></div>
          </div>
          <div className="row" id="about-bottom-row">
          </div>
       </div>
       {this.props.menuClicked ? <Menu handleMenuClick={this.props.handleMenuClick} handleLogoClick={this.props.handleLogoClick} mobile={this.props.mobile}/> : null}
    </div>
    )
  }
}

export default About;
