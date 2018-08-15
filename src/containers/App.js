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
      }
    }
  }

  componentDidMount(){

  }

  updatedLoadedComponent = (state) => {
    this.setState({loadedComponent: state})
  }


  render(){
    return(
      <div style={{background: '#F8F9FC'}}>
        <div style={{height: '100%', background: "url('assets/background/bg_wave.svg')", backgroundSize: 'cover'}}>
          <BrowserRouter>
            <div>
              <Navbar loadedComponent={this.state.loadedComponent}/>
              <Switch>
                <Route loadedComponent={this.state.loadedComponent} path="/about" render={() => (<About updatedLoadedComponent={this.updatedLoadedComponent}/>)}/>
                <Route loadedComponent={this.state.loadedComponent} path="/" render={() => (<Home updatedLoadedComponent={this.updatedLoadedComponent}/>)}/>
              </Switch>
          </div>
          </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;
