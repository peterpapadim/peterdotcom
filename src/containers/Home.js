import React, {Component} from 'react';
import WorkTimeline from '../components/worktimeline';
import CaseStudy from '../components/casestudy';
import $ from "jquery";
import '../assets/styling/home.css';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      lineColor: "#17202A",
      title: "Baron Fig",
      about: "We make tools for thinkers.",
      transitionStatus: "transition-in"
    }
  }


  setLineColor = (colorHex) => {
    this.setState({lineColor: colorHex})
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
        <WorkTimeline setLineColor={this.setLineColor} lineColor={this.state.lineColor} updateTitleAndAbout={this.updateTitleAndAbout}/>
        <div className="home item">
          <CaseStudy transitionStatus={this.state.transitionStatus} title={this.state.title} about={this.state.about}/>
        </div>
      </div>
    )
  }
}


export default Home;
