import React, {Component} from 'react';
import '../assets/styling/navbar.css';
import logo_black from '../assets/logo/logo_black.svg';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      styles: {}
    }
  }

  render(){
    return (
      <div className="navbar" style={{paddingTop: '40px'}}>
        <ul className="items left">
          <li><img src={logo_black}/></li>
          <li>Home</li>
          <li>About Me</li>
          <li>Works</li>
        </ul>
        <ul className="items right">
          <li>Blog</li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
