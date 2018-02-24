import React, { Component } from 'react';
import LogoBlack from '../assets/logo/logo_black.svg';
import MenuBlack from '../assets/menu/menu_black.svg';
import ArrowDownBlack from '../assets/arrow/arrow_down_black.svg';
import ArrowUpBlack from '../assets/arrow/arrow_up_black.svg';


class MenuButtons extends Component {

  displayLogo = () => {
    return <img id="logo" src={LogoBlack} onClick={this.handleLogoClick}/>
  }

  displayMenu = () => {
    return(
    <div id="menu">
      <svg width="39px" height="29px" viewBox="0 0 39 29" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={this.props.handleMenuClick}>
          <title>menu_black</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Code-Peter" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1303.000000, -50.000000)" stroke-linecap="square">
              <g id="menu_black" transform="translate(1305.000000, 50.000000)" stroke="#000000" stroke-width="3">
                  <path d="M34.7542373,1.5 L6.20765259,1.5" id="Line-1"></path>
                  <path d="M34.75,27.5 L19.2419376,27.5" id="Line-3"></path>
                  <path d="M34.7569444,14.5 L0.243055556,14.5" id="Line-2"></path>
              </g>
          </g>
      </svg>
    </div>
    )
  }

  handleLogoClick = () => {
    window.$.fn.pagepiling.moveTo(1);
  }

  handleArrowClick = () => {
    if(this.props.currentPage === 5){
      window.$.fn.pagepiling.moveTo(1);
    }
    else{
      window.$.fn.pagepiling.moveTo(this.props.currentPage + 1);
    }
  }

  displayArrow = () => {
    if(this.props.currentPage === 5){
      return <img id="arrow" src={ArrowUpBlack} onClick={this.handleArrowClick}/>
    }
    else {
      return <img id="arrow" src={ArrowDownBlack} onClick={this.handleArrowClick}/>
    }
  }

  comingSoon = () => {
    return <div><p id="coming-soon">December 2017 - Present</p><p>(Coming Soon...)</p></div>
  }

  displayProjectLinks = () => {
    if(this.props.currentPage === 1){
      return
    }
    else if(this.props.currentPage === 2){
      return this.comingSoon()
    }
    else{
      return this.projectLinks()
    }
  }

  projectLinks = () => {
    return (
      <ul id="project-links">
        <li className="project-link">View Demo ⟶</li>
        <li className="project-link">View Front-End ⟶</li>
        <li className="project-link">View Back-End ⟶</li>
      </ul>
    )
  }

  projectInfo = () => {
    let page = this.props.currentPage
    return (
      <div id="project-info-container">
        <p className="title">{this.props.info[page - 1][0]}</p>
        <p className="blurb">{this.props.info[page - 1][1]}</p>
      </div>
    )
  }


  render(){
    return(
      <div id="menu-buttons" className="container-fluid">
        <div className="col-12" id="menu-buttons-container">
          <div className="row" id="logo-menu-container">
            <div className="col-1"></div>
            <div className="col-1">{this.displayLogo()}</div>
            <div className="col-8"></div>
            <div className="col-1" id="menu-container">{this.displayMenu()}</div>
            <div className="col-1"></div>
          </div>
          <div className="row" id="links-row">
            <div className="col-1"></div>
            <div className="col-2">
              {this.displayProjectLinks()}
            </div>
          </div>
          <div className="row" id="bottom-menu-container">
              <div className="col-1"></div>
              <div id="arrow-container" className="col-1">{this.displayArrow()}</div>
              <div className="col-6"></div>
              <div className="col-4">{this.projectInfo()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuButtons;
