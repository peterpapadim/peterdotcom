import React, {Component} from 'react'
// import BaronFig from '../assets/works/baron-fig/baronfig_casestudy_header.png';

class About extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
    this.props.updatedLoadedComponent(
      {
        homeLoaded: false,
        aboutLoaded: true,
        worksLoaded: false,
        blogLoaded: false,
        resumeLoaded: false
      }
    )
    // this.props.updateBackgroundImage(BaronFig)
  }

  render(){
    return(
        <div>
          <p>test</p>
        </div>
    )
  }
}

export default About
