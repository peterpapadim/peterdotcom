import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styling/navbar.css';
import logo_black from '../assets/logo/logo_black.svg';
import $ from "jquery";


class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      mobileMenuOpened: false,
      homeSelected: true,
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
    else {
      this.setState({ homeSelected: false, aboutSelected: false, worksSelected: false, blogSelected: false, resumeSelected: false})
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


  handleMobileMenuClick = (e) => {
    if(this.state.mobileMenuOpened){
      this.setState({mobileMenuOpened: false}, this.animateMobileMenuHamburgerReverse(e))
    }
    else{
      this.setState({mobileMenuOpened: true}, this.animateMobileMenuHamburgerForward(e))
    }
  }


  animateMobileMenuHamburgerForward = (e) => {
    let currentTarget = $(e.currentTarget)
    $(currentTarget.children()[0])
      .removeClass('rotate-hamburger-top-reverse')
      .addClass('rotate-hamburger-top-forward')
    $(currentTarget.children()[1])
      .removeClass('rotate-hamburger-bottom-reverse')
      .addClass('rotate-hamburger-bottom-forward')
  }

  animateMobileMenuHamburgerReverse = (e) => {
    let currentTarget = $(e.currentTarget)
    $(currentTarget.children()[0])
      .removeClass('rotate-hamburger-top-forward')
      .addClass('rotate-hamburger-top-reverse')
    $(currentTarget.children()[1])
      .removeClass('rotate-hamburger-bottom-forward')
      .addClass('rotate-hamburger-bottom-reverse')
  }


  render(){
    return (
      <div className="navbar" style={{paddingTop: '40px', position: 'relative', zIndex: '10', left: '0', right: '0', display: 'flex', justifyContent: 'space-between'}}>
        <ul className="items left">
          <li><Link onClick={this.handleNavItemClick} className={this.state.homeSelected ? "selected" : ""} to='/'><img src={logo_black}/></Link></li>
          <li className="desktop-nav-item"><Link onClick={this.handleNavItemClick} className={this.state.homeSelected ? "selected" : ""} to='/'>Home</Link></li>
          <li className="desktop-nav-item"><Link onClick={this.handleNavItemClick} className={this.state.aboutSelected ? "selected" : ""} to='/about'>About Me</Link></li>
          <li className="desktop-nav-item"><Link onClick={this.handleNavItemClick} className={this.state.worksSelected ? "selected" : ""} to='/works'>Works</Link></li>
        </ul>
        <ul className="items right desktop-nav-item">
          <li><Link onClick={this.handleNavItemClick} className={this.state.blogSelected ? "selected" : ""} to='/blog'>Blog</Link></li>
          <li><Link onClick={this.handleNavItemClick} className={this.state.resumeSelected ? "selected" : ""} to='/resume'>Resume</Link></li>
          <li><Link onClick={this.handleNavItemClick} style={{textDecoration: 'none'}} to='/contact'>Contact Me</Link></li>
        </ul>
        <ul className="items right mobile-hamburger" style={{display: 'none', padding: '0', margin: '0 30px'}}>
          <div style={{height: '50px', width: '50px', background: 'white', float: 'right'}}>
            <div onClick={(e) => this.handleMobileMenuClick(e)} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', height: '25px', cursor: 'pointer'}}>
              <div style={{position: 'absolute', height: '3px', backgroundColor: 'black', width: '20px', transform: 'translateY(-50%)', top: 'calc(50% - 3.5px)', borderRadius: '50px', right: '0'}}></div>
              <div style={{position: 'absolute', height: '3px', backgroundColor: 'black', width: '25px', transform: 'translateY(-50%)', top: 'calc(50% + 3.5px)', borderRadius: '50px', right: '0'}}></div>
            </div>
          </div>
        </ul>

      </div>
    )
  }
}

export default Navbar;
