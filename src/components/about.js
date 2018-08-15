import React, {Component} from 'react'

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
  }

  render(){
    return <div>About</div>
  }
}

export default About
