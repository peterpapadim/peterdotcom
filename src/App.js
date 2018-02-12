import React, { Component } from 'react';
import Intro from './containers/Intro';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import ContactMe from './containers/ContactMe';
import Footer from './containers/Footer';
import DotNavigator from './containers/DotNavigator';
import $ from 'jquery';
var smoothScroll = require('smoothscroll');

class App extends Component {

  constructor(){
    super();
    this.state = {
      inViewDiv: "intro",
      scrollTop: 0
    }
  }

  checkInView = () => {
      if(this.isScrolledIntoView("#intro-blurb") && this.state.inViewDiv !== "intro"){
        this.setState({inViewDiv: "intro"})
      }
      if(this.isScrolledIntoView("#bio-container") && this.state.inViewDiv !== "about"){
        this.setState({inViewDiv: "about"})
      }
      if(this.isScrolledIntoView("#tech-skills-container") && this.state.inViewDiv !== "skills"){
        this.setState({inViewDiv: "skills"})
      }
      if(this.isScrolledIntoView("#reelsquad-text") && this.state.inViewDiv !== "projects"){
        this.setState({inViewDiv: "projects"})
      }
  }

  autoScroll = () => {
    if(this.state.inViewDiv === "intro" && $(window).scrollTop() > this.state.scrollTop){
      window.removeEventListener('scroll', this.autoScroll)
      let element = document.getElementById("about-container")
      smoothScroll(element, 1300, () => {
        this.setState({scrollTop: $(window).scrollTop()})
        window.addEventListener('scroll', this.autoScroll);
      })
    }
    if(this.state.inViewDiv === "about" && $(window).scrollTop() < this.state.scrollTop){
      window.removeEventListener('scroll', this.autoScroll)
      let element = document.getElementById("intro-container")
      smoothScroll(element, 1300, () => {
        this.setState({scrollTop: $(window).scrollTop()})
        window.addEventListener('scroll', this.autoScroll);
      })
    }
    if(this.state.inViewDiv === "about" && $(window).scrollTop() > this.state.scrollTop){
      window.removeEventListener('scroll', this.autoScroll)
      let element = document.getElementById("skills-container")
      smoothScroll(element, 1300, () => {
        this.setState({scrollTop: $(window).scrollTop()})
        window.addEventListener('scroll', this.autoScroll);
      })
    }
    if(this.state.inViewDiv === "skills" && $(window).scrollTop() < this.state.scrollTop){
      window.removeEventListener('scroll', this.autoScroll)
      let element = document.getElementById("about-container")
      smoothScroll(element, 1300, () => {
        this.setState({scrollTop: $(window).scrollTop()})
        window.addEventListener('scroll', this.autoScroll);
      })
    }
    if(this.state.inViewDiv === "skills" && $(window).scrollTop() > this.state.scrollTop){
      window.removeEventListener('scroll', this.autoScroll)
      let element = document.getElementById("projects-container-1")
      smoothScroll(element, 1300, () => {
        this.setState({scrollTop: $(window).scrollTop()})
        window.addEventListener('scroll', this.autoScroll);
      })
    }
    if(this.state.inViewDiv === "projects" && $(window).scrollTop() < this.state.scrollTop){
      window.removeEventListener('scroll', this.autoScroll)
      let element = document.getElementById("skills-container")
      smoothScroll(element, 1300, () => {
        this.setState({scrollTop: $(window).scrollTop()})
        window.addEventListener('scroll', this.autoScroll);
      })
    }
  }

  handleDotClick = (id) => {
    window.removeEventListener('scroll', this.autoScroll)
    let element = document.getElementById(id)
    smoothScroll(element, 1300, () => {
      this.setState({scrollTop: $(window).scrollTop()})
      window.addEventListener('scroll', this.autoScroll);
    })
  }

  handleArrowClick = (id) => {
    let element = document.getElementById(id)
    smoothScroll(element, 1300)
  }

  componentDidMount() {
   this.setState({scrollTop: $(window).scrollTop()})
   window.addEventListener('scroll', this.checkInView);
   window.addEventListener('scroll', this.autoScroll);
  }

  isScrolledIntoView = (elem) => {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

  render() {
    return (
      <div id="App" className="App">
        <DotNavigator inViewDiv={this.state.inViewDiv} handleDotClick={this.handleDotClick}/>
        <Intro handleArrowClick={this.handleArrowClick}/>
        <About handleArrowClick={this.handleArrowClick}/>
        <Skills handleArrowClick={this.handleArrowClick}/>
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
