import React, { Component } from 'react';
import LogoWhite from '../assets/logo/logo_white.svg';
import LogoBlack from '../assets/logo/logo_black.svg';
import MenuWhite from '../assets/menu/menu_white.svg';
import MenuBlack from '../assets/menu/menu_black.svg';
import Exit from '../assets/menu/close_white.svg';
import ArrowDownWhite from '../assets/arrow/arrow_down_white.svg';
import ArrowDownBlack from '../assets/arrow/arrow_down_black.svg';
import ArrowUpWhite from '../assets/arrow/arrow_up_white.svg';
import ArrowUpBlack from '../assets/arrow/arrow_up_black.svg';


class MenuButtons extends Component {

  displayLogo = () => {
    if([1, 5].includes(this.props.currentPage)){
      return <img id="logo" src={LogoBlack} onClick={this.handleLogoClick}/>
    }
    else {
      return <img id="logo" src={LogoWhite} onClick={this.handleLogoClick}/>
    }
  }

  displayMenu = () => {
    if(this.props.menuClicked){
      return <img id="menu" src={Exit} onClick={this.props.handleMenuClick}/>
    }
    else if([1, 5].includes(this.props.currentPage)){
      return <img id="menu" src={MenuBlack} onClick={this.props.handleMenuClick}/>
    }
    else {
      return <img id="menu" src={MenuWhite} onClick={this.props.handleMenuClick}/>
    }
  }

  handleLogoClick = () => {
    window.$.fn.pagepiling.moveTo(1);
  }

  handleArrowClick = () => {
    switch(this.props.currentPage){
      case 1:
        window.$.fn.pagepiling.moveTo(2);
        break;
      case 2:
        window.$.fn.pagepiling.moveTo(3);
        break;
      case 3:
        window.$.fn.pagepiling.moveTo(4);
        break;
      case 4:
        window.$.fn.pagepiling.moveTo(5);
        break;
      case 5:
        window.$.fn.pagepiling.moveTo(1);
        break;
    }
  }

  displayArrow = () => {
    if(this.props.currentPage === 1){
      return <img id="arrow" src={ArrowDownBlack} onClick={this.handleArrowClick}/>
    }
    else if(this.props.currentPage === 5){
      return <img id="arrow" src={ArrowUpBlack} onClick={this.handleArrowClick}/>
    }
    else {
      return <img id="arrow" src={ArrowDownWhite} onClick={this.handleArrowClick}/>
    }
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
          <div className="row" id="bottom-menu-container">
            <div className="col-12" id="bottom-menu-column">
              <div className="row" id="bottom-menu-buffer"></div>
              <div className="row" id="bottom-menu-content">
                <div className="col-1"></div>
                <div className="col-1">{this.displayArrow()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuButtons;
