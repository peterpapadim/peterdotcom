import React, { Component } from 'react';
import Intro from './containers/Intro';
import About from './containers/About';
import Skills from './containers/Skills';
// var smoothScroll = require('smoothscroll');

class App extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     currentPage: "intro-container",
  //     currentHeight: 0
  //   }
  // }

  // componentDidMount(){
  //
  // }

  // handleScroll = () => {
    // console.log(window.scrollY)
    // let element = document.getElementById("about-container")
    // smoothScroll(element)


  // handleWheel = () => {
  //   let element = document.getElementById("intro-container")
  //   smoothScroll(element, 1000)
  // }

  render() {
    return (
      <div id="App" className="App">
        <Intro />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;
