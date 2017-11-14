import React, { Component } from 'react';
import Intro from './containers/Intro';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import ContactMe from './containers/ContactMe';

class App extends Component {

  render() {
    return (
      <div id="App" className="App">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}

export default App;
