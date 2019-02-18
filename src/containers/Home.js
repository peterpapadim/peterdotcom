import React, {Component} from 'react';
import WorkTimeline from '../components/worktimeline';
import CaseStudy from '../components/casestudy';
import $ from "jquery";
import '../assets/styling/home.css';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      initialColor: "#22C995",
      colorAnimation: '',
      title: "Baron Fig",
      about: "We make tools for thinkers.",
      transitionStatus: "transition-in"
    }
  }


  componentDidMount(){
    this.props.updatedLoadedComponent(
      {
        homeLoaded: true,
        aboutLoaded: false,
        worksLoaded: false,
        blogLoaded: false,
        resumeLoaded: false
      }
    )
    this.props.updateBackgroundImage(null)
  }

  setColorAnimation = (className) => {
    this.setState({colorAnimation: className})
  }

  updateTitleAndAbout = (title, about) => {
    this.setState({transitionStatus: 'transition-out'}, () => {
      this.setState({title: title, about: about}, () => {
        this.setState({transitionStatus: 'transition-in'})
      })
    })
  }

  render(){
    return (
      <div className="home fade-in">
        <div className="home item"><p className="header">Hi, I'm Peter!</p></div>
        <div className="home item"><p className="blurb">A Brooklyn hipster who doubles as a Full Stack Developer with a focus in Frontend Engineering.</p></div>
        <WorkTimeline updateTitleAndAbout={this.updateTitleAndAbout} initialColor={this.state.initialColor} colorAnimation={this.state.colorAnimation} setColorAnimation={this.setColorAnimation}/>
        <div className="home item">
          <CaseStudy transitionStatus={this.state.transitionStatus} title={this.state.title} about={this.state.about} initialColor={this.state.initialColor} colorAnimation={this.state.colorAnimation}/>
        </div>
      </div>
    )
  }
}


export default Home;
