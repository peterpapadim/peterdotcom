import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from '../components/navbar';
import About from '../components/about';
import BaronFig from '../components/baronFig';

class App extends Component {

  constructor(){
    super();
    this.state = {
      loadedComponent: {
        homeLoaded: false,
        aboutLoaded: false,
        worksLoaded: false,
        blogLoaded: false,
        resumeLoaded: false
      },
      backgroundImage: null
    }
  }

  componentDidMount(){

  }

  updatedLoadedComponent = (state) => {
    this.setState({loadedComponent: state})
  }

  resetLoadedComponent = () => {
    this.setState({loadedComponent: {
      homeLoaded: false,
      aboutLoaded: false,
      worksLoaded: false,
      blogLoaded: false,
      resumeLoaded: false
    }}, console.log(this.state))
  }

  updateBackgroundImage = (imgSrc) => {
    this.setState({backgroundImage: imgSrc})
  }


  render(){
    return(
      <div style={{height: '100%'}}>
        <div style={{paddingBottom: '100px'}}>
          <div style={{background: "url('assets/background/bg_wave-50opac-1.svg')", backgroundRepeat: 'no-repeat', backgroundSize: '100%', width: '100%', minHeight: '100%', position: 'fixed', zIndex: '-1', backgroundPosition: 'right top'}}>
            {this.state.backgroundImage ? <div><img className="fade-in-page" style={{position: 'absolute', width: '50%', right: '0', top: '150px'}} src={this.state.backgroundImage}></img></div> : null}
          </div>
          <BrowserRouter>
            <div>
              <Navbar loadedComponent={this.state.loadedComponent}/>
              <Switch>
                <Route path="/about" render={() => (<About loadedComponent={this.state.loadedComponent} updatedLoadedComponent={this.updatedLoadedComponent} />)}/>
                <Route path="/baron-fig" render={() => (<BaronFig resetLoadedComponent={this.resetLoadedComponent} updateBackgroundImage={this.updateBackgroundImage}/>)}/>
                <Route path="/" render={() => (<Home loadedComponent={this.state.loadedComponent} updatedLoadedComponent={this.updatedLoadedComponent} updateBackgroundImage={this.updateBackgroundImage}/>)}/>
              </Switch>
          </div>
          </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;

// style={{height: '100%', background: "url('assets/background/bg_wave.svg')", backgroundSize: 'cover'}}
// This styling was originally on line 34. (div that wraps browserrouter)
// <img src='assets/background/bg_grey-wave.svg' style={{position: 'absolute', zIndex: '-1', width: '100%'}}/>
// <img src={BaronFig}/>
