import React, {Component} from 'react';
import LogoBlack from '../assets/logo/logo_black.svg';

class NavBar extends Component {

  displayLogo = () => {
    return <img id={this.props.mobile ? "logo-mobile" : "logo"} src={LogoBlack} alt="logo-black" onClick={this.props.handleLogoClick}/>
  }

  displayMenu = () => {
    return(
    <div id="menu-button-container">
      <svg id={this.props.mobile ? "menu-button-mobile" : "menu-button"} width="39px" height="29px" viewBox="0 0 39 29" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={this.props.handleMenuClick}>
          <title>menu_black</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Code-Peter" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-1303.000000, -50.000000)" strokeLinecap="square">
              <g id="menu_black" transform="translate(1305.000000, 50.000000)" stroke="#000000" strokeWidth="3">
                  <path d="M34.7542373,1.5 L6.20765259,1.5" id="Line-1"></path>
                  <path d="M34.75,27.5 L19.2419376,27.5" id="Line-3"></path>
                  <path d="M34.7569444,14.5 L0.243055556,14.5" id="Line-2"></path>
              </g>
          </g>
      </svg>
    </div>
    )
  }


  render(){
    return(
      <div className="row" id="logo-menu-container">
        <div className="col-1"></div>
        <div className="col-1">{this.displayLogo()}</div>
        <div className="col-8"></div>
        <div className="col-1" id="menu-container">{this.displayMenu()}</div>
        <div className="col-1"></div>
      </div>
    )
  }
}

export default NavBar;
