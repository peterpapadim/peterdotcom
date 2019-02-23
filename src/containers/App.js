import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from '../components/navbar';
import About from '../components/about';

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

  updateBackgroundImage = (imgSrc) => {
    this.setState({backgroundImage: imgSrc})
  }


  render(){
    return(
      <div style={{height: '100%'}}>
        <div style={{paddingBottom: '100px'}}>
          <div style={{background: "url('assets/background/bg_wave-50opac-1.svg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', minHeight: '100%', position: 'fixed', zIndex: '-1', backgroundPosition: 'top right'}}>
            {this.state.backgroundImage ? <div><img className="fade-in-page" style={{position: 'absolute', width: '50%', right: '0', top: '150px'}} src={this.state.backgroundImage}></img></div> : null}
          </div>
          <BrowserRouter>
            <div>
              <Navbar loadedComponent={this.state.loadedComponent}/>
              <Switch>
                <Route loadedComponent={this.state.loadedComponent} path="/about" render={() => (<About updatedLoadedComponent={this.updatedLoadedComponent} updateBackgroundImage={this.updateBackgroundImage}/>)}/>
                <Route loadedComponent={this.state.loadedComponent} path="/" render={() => (<Home updatedLoadedComponent={this.updatedLoadedComponent} updateBackgroundImage={this.updateBackgroundImage}/>)}/>
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
