import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main.js';
import Contact from './Contact.js';
import About from './About.js';
import $ from 'jquery';

class App extends Component {

  constructor(){
    super();
    this.state = {
      menuClicked: false,
      mobile: false
    }
  }

  componentDidMount(){
    if(window.innerWidth < 576){this.setState({mobile: true})}
    else{this.setState({mobile: false})}
    $(window).on('resize', () => {
      if(window.innerWidth < 576){
        this.setState({mobile: true})
      }
      else{this.setState({mobile: false})}
    })
  }

  handleMenuClick = () => {
    if(this.state.menuClicked){
      this.setState({menuClicked: false})
    }
    else{
      this.setState({menuClicked: true})
    }
  }

  handleLogoClick = () => {
    if(window.location.href.includes("#")){
      window.$.fn.pagepiling.moveTo(1);
      if(this.state.menuClicked){
        this.handleMenuClick()
      }
    }
    else{
      window.location.href = '/'
    }
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/about" render={() => (<About handleMenuClick={this.handleMenuClick} menuClicked={this.state.menuClicked} handleLogoClick={this.handleLogoClick} mobile={this.state.mobile}/>)}/>
          <Route path="/contact" render={() => (<Contact handleMenuClick={this.handleMenuClick} menuClicked={this.state.menuClicked} handleLogoClick={this.handleLogoClick} mobile={this.state.mobile}/>)}/>
          <Route path="/" render={() => (<Main handleMenuClick={this.handleMenuClick} menuClicked={this.state.menuClicked} handleLogoClick={this.handleLogoClick} mobile={this.state.mobile}/>)}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
