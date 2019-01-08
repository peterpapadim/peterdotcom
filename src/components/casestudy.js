import React, {Component} from 'react'
import '../assets/styling/casestudy.css';

class CaseStudy extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
  }

  renderArrowSvg = () => {
    return(
      <svg className="arrow-icon" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Code-Peter-v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path d="M23.9529113,15.2694939 C23.9693418,15.2848603 23.9852535,15.3007746 24.0006173,15.3172076 L24.6837565,16.000457 L17.7777068,22.9065068 C17.3871825,23.2970311 16.7540175,23.2970311 16.3634932,22.9065068 C15.9729689,22.5159825 15.9729689,21.8828175 16.3634932,21.4922932 L20.8557864,17 L8.73,17 C8.17771525,17 7.73,16.5522847 7.73,16 C7.73,15.4477153 8.17771525,15 8.73,15 L20.8552618,15 L16.3634362,10.5074497 C15.9729434,10.116894 15.9729945,9.48372899 16.3635503,9.09323619 C16.754106,8.7027434 17.387271,8.70279446 17.7777638,9.09335025 L23.952911,15.2694936 Z M30,16 C30,8.26828475 23.7317153,2 16,2 C8.26828475,2 2,8.26828475 2,16 C2,23.7317153 8.26828475,30 16,30 C23.7317153,30 30,23.7317153 30,16 Z M32,16 C32,24.8362847 24.8362847,32 16,32 C7.16371525,32 0,24.8362847 0,16 C0,7.16371525 7.16371525,0 16,0 C24.8362847,0 32,7.16371525 32,16 Z" id="Combined-Shape" className={this.props.colorAnimation} fill={this.props.initialColor} fillRule="nonzero"></path>
          </g>
      </svg>
    )
  }

  render(){
    return(
      <div className='casestudy-container'>
        <div className={'title-about-container ' + this.props.transitionStatus}>
          <p className='title'>{this.props.title}</p>
          <p className='about'>{this.props.about}</p>
        </div>
        <div className='view-case-study-container'>
          <p className={this.props.colorAnimation + ' view-case-study'} style={{color: this.props.initialColor}}>View Case Study</p>
          {this.renderArrowSvg()}
        </div>
      </div>
    )
  }
}

export default CaseStudy
