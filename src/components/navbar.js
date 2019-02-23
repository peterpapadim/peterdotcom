import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styling/navbar.css';
import logo_black from '../assets/logo/logo_black.svg';


class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      homeSelected: false,
      aboutSelected: false,
      worksSelected: false,
      blogSelected: false,
      resumeSelected: false
    }
  }

  componentWillReceiveProps(props){
    if(props.loadedComponent.homeLoaded){
      this.setState({ homeSelected: true, aboutSelected: false, worksSelected: false, blogSelected: false, resumeSelected: false})
    }
    else if(props.loadedComponent.aboutLoaded){
      this.setState({ homeSelected: false, aboutSelected: true, worksSelected: false, blogSelected: false, resumeSelected: false})
    }
    else if(props.loadedComponent.worksLoaded){
      this.setState({ homeSelected: false, aboutSelected: false, worksSelected: true, blogSelected: false, resumeSelected: false})
    }
    else if(props.loadedComponent.blogLoaded){
      this.setState({ homeSelected: false, aboutSelected: false, worksSelected: false, blogSelected: true, resumeSelected: false})
    }
    else if(props.loadedComponent.resumeLoaded){
      this.setState({ homeSelected: false, aboutSelected: false, worksSelected: false, blogSelected: false, resumeSelected: true})
    }
  }


  handleNavItemClick = (e) => {
    switch(e.target.innerHTML){
      case "Home":
        this.setState({ homeSelected: true, aboutSelected: false, worksSelected: false, blogSelected: false, resumeSelected: false})
        break;
      case "About Me":
        this.setState({ homeSelected: false, aboutSelected: true, worksSelected: false, blogSelected: false, resumeSelected: false})
        break;
      case "Works":
        this.setState({ homeSelected: false, aboutSelected: false, worksSelected: true, blogSelected: false, resumeSelected: false})
        break;
      case "Blog":
        this.setState({ homeSelected: false, aboutSelected: false, worksSelected: false, blogSelected: true, resumeSelected: false})
        break;
      case "Resume":
        this.setState({ homeSelected: false, aboutSelected: false, worksSelected: false, blogSelected: false, resumeSelected: true})
        break;
    }
  }


  render(){
    return (
      <div className="navbar" style={{paddingTop: '40px', position: 'relative', zIndex: '10', left: '0', right: '0'}}>
        <ul className="items left">
          <li><img src={logo_black}/></li>
          <li><Link onClick={this.handleNavItemClick} className={this.state.homeSelected ? "selected" : ""} to='/'>Home</Link></li>
          <li><Link onClick={this.handleNavItemClick} className={this.state.aboutSelected ? "selected" : ""} to='/about'>About Me</Link></li>
          <li><Link onClick={this.handleNavItemClick} className={this.state.worksSelected ? "selected" : ""} to='/works'>Works</Link></li>
        </ul>
        <ul className="items right">
          <li><Link onClick={this.handleNavItemClick} className={this.state.blogSelected ? "selected" : ""} to='/blog'>Blog</Link></li>
          <li><Link onClick={this.handleNavItemClick} className={this.state.resumeSelected ? "selected" : ""} to='/resume'>Resume</Link></li>
          <li><Link onClick={this.handleNavItemClick} style={{textDecoration: 'none'}} to='/contact'>Contact Me</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
