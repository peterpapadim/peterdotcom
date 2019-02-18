import React, {Component} from 'react'
import BaronFig from '../assets/case-studies/baron-fig/baronfig_casestudy_header.png';

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
    this.props.updateBackgroundImage(BaronFig)
  }

  render(){
    return(
      <div style={{width: '100%', position: 'absolute', top: '0', zIndex: '-1'}}>
        <div style={{background: "url('assets/background/bg_wave-blur.svg')", position: 'relative', width: '100%', minHeight: '1000px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
          <div className='fade-in-page' style={{paddingTop: '150px'}}>
            <p style={{marginTop: '0px'}}>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p>TESTING</p>
            <p style={{marginBottom: '0px'}}>TESTING</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
