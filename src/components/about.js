import React, {Component} from 'react'
import '../assets/styling/about.css';

class About extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.updatedLoadedComponent(
      {
        homeLoaded: false,
        aboutLoaded: true,
        worksLoaded: false,
        blogLoaded: false,
        resumeLoaded: false
      }
    )
  }

  render(){
    return(
          <div className="about-page" style={{backgroundImage: 'url(assets/background/bg_wave-50opac-2.svg)', backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: '100%', position: 'relative', top: '-90px', backgroundPosition: 'right top'}}>
              <div>
                <div className="page-container">
                  <p className="title">Hi, I'm Peter!</p>
                  <div className="content fade-in-page">
                    <p className="blurb">Born and raised hipster from the heart of Brooklyn, New York. I am a Full Stack Developer with a background in Supply Chain & Logistics. I taught myself how to code using a couple of beginner books and online tutorials which led to my attending and graduating from the Flatiron School's immersive web program. I specialize in Javascript and Ruby on Rails Programming. I speak greek, am a sucker for food, and enjoy traveling the world.</p>
                    <div className="technical-skills">
                      <p className="technical-skills-title">Technical Skills</p>
                      <div className="technical-skills-list-container">
                        <div className="skills-col">
                          <p>Javascript</p>
                          <p>Node</p>
                          <p>React</p>
                          <p>Redux</p>
                          <p>Next.js</p>
                        </div>
                        <div className="skills-col">
                          <p>Ruby</p>
                          <p>Rails</p>
                          <p>Active Record</p>
                          <p>REST</p>
                          <p>Apollo/GraphQL</p>
                        </div>
                        <div className="skills-col">
                          <p>CSS & SASS</p>
                          <p>HTML</p>
                          <p>Shopify Themes & Storefront API</p>
                          <p>Heroku/AWS</p>
                          <p>VWO A/B Testing</p>
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

export default About;
