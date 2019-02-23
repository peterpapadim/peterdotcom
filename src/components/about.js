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
        <div>
          <div style={{backgroundImage: 'url(assets/background/bg_wave-50opac-2.svg)', backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: '100%', position: 'absolute', top: '0', backgroundPosition: 'right top'}}>
              <div className='fade-in-page' >
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



// <div>
//   <img src='assets/background/bg_wave-50opac-2.svg' style={{width: '100%', position: 'absolute', top: '0'}}/>
//   <div className='fade-in-page' >
//     <p style={{marginTop: '0px'}}>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p>TESTING</p>
//     <p style={{marginBottom: '0px'}}>TESTING</p>
//   </div>
// </div>
