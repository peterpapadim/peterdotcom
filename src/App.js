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
      onWheel: 0,
      fromBottom: false
    }
  }

  checkInView = () => {
      if(this.isScrolledIntoView("#intro-blurb") && this.state.inViewDiv !== "intro"){
        this.setState({inViewDiv: "intro"})
      }
      if(this.isScrolledIntoView("#headshot") && this.state.inViewDiv !== "about"){
        this.setState({inViewDiv: "about"})
      }
      if(this.isScrolledIntoView("#protractor-icon") && this.state.inViewDiv !== "skills"){
        this.setState({inViewDiv: "skills"})
      }
      if(this.isScrolledIntoView("#reelsquad-text") && this.state.inViewDiv !== "projects"){
        this.setState({inViewDiv: "projects"})
      }
  }

  autoScroll = (event) => {
    this.setState({onWheel: event.deltaY})
    window.removeEventListener('DOMMouseScroll', (event) => this.autoScroll(event))
    window.onmousewheel = document.onmousewheel = null;
    if(this.state.inViewDiv === "intro" && this.state.onWheel > 0){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("about-container")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0})
      })
    }
    else if(this.state.inViewDiv === "about" && this.state.onWheel < 0){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("intro-container")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0})
      })
    }
    else if(this.state.inViewDiv === "about" && this.state.onWheel > 0){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("skills-container")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0})
      })
    }
    else if(this.state.inViewDiv === "skills" && this.state.onWheel < 0){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("about-container")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0})
      })
    }
    else if(this.state.inViewDiv === "skills" && this.state.onWheel > 0){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("projects-container-1")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0})
      })
    }
    else if(this.state.inViewDiv === "projects" && this.state.onWheel < 0 && this.state.fromBottom){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("projects-container-1")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0, fromBottom: false})
      })
    }
    else if(this.state.inViewDiv === "projects" && this.state.onWheel < 0){
      $("body").css("overflow", "hidden");
      let element = document.getElementById("skills-container")
      smoothScroll(element, 1000, () => {
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        this.setState({onWheel: 0})
      })
    }
    else if(this.state.onWheel > 0){
        $("body").css("overflow", "visible");
        this.setState({inViewDiv: ""})
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
    }
    else if(this.state.onWheel <= 0){
        $("body").css("overflow", "visible");
        window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
        window.onmousewheel = document.onmousewheel = this.autoScroll;
        if(!this.state.fromBottom){
          this.setState({fromBottom: true})
        }
    }
  }

  handleDotClick = (id) => {
    window.removeEventListener('DOMMouseScroll', this.autoScroll)
    let element = document.getElementById(id)
    smoothScroll(element, 1000, () => {
      this.setState({scrollTop: $(window).scrollTop()})
      window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
    })
  }

  handleArrowClick = (id) => {
    let element = document.getElementById(id)
    smoothScroll(element, 1000)
  }


  componentDidMount() {
     this.setState({scrollTop: $(window).scrollTop()})
     window.addEventListener('scroll', this.checkInView);
     window.addEventListener('DOMMouseScroll', (event) => this.autoScroll(event));
     window.onmousewheel = document.onmousewheel = this.autoScroll;
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
