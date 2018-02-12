import React, { Component } from 'react';
import Intro from './containers/Intro';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import ContactMe from './containers/ContactMe';
import Footer from './containers/Footer';
import DotNavigator from './containers/DotNavigator';
import $ from 'jquery';

class App extends Component {

  constructor(){
    super();
    this.state = {
      inViewDiv: "intro"
    }
  }

  componentDidMount() {
   window.addEventListener('scroll', (event) => {
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
   });
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
        <DotNavigator inViewDiv={this.state.inViewDiv}/>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
