import React, {Component} from 'react'
import '../assets/styling/casestudy.css';

class CaseStudy extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
  }

  render(){
    return(
      <div className='casestudy-container'>
        <div className={'title-about-container ' + this.props.transitionStatus}>
          <p className='title'>{this.props.title}</p>
          <p className='about'>{this.props.about}</p>
        </div>
      </div>
    )
  }
}

export default CaseStudy
