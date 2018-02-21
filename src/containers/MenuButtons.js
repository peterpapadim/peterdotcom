import React, { Component } from 'react';
import LogoWhite from '../assets/logo/logo_white.svg';
import LogoBlack from '../assets/logo/logo_black.svg';
import MenuWhite from '../assets/menu/menu_white.svg';
import MenuBlack from '../assets/menu/menu_black.svg';
import ArrowDownWhite from '../assets/arrow/arrow_down_white.svg';
import ArrowDownBlack from '../assets/arrow/arrow_down_black.svg';
import ArrowUpWhite from '../assets/arrow/arrow_up_white.svg';
import ArrowUpBlack from '../assets/arrow/arrow_up_black.svg';


class MenuButtons extends Component {

  displayLogo = () => {
    if([1, 5].includes(this.props.currentPage)){
      return <img id="logo" src={LogoBlack}/>
    }
    else {
      return <img id="logo" src={LogoWhite}/>
    }
  }

  displayMenu = () => {
    if([1, 5].includes(this.props.currentPage)){
      return <img id="menu" src={MenuBlack}/>
    }
    else {
      return <img id="menu" src={MenuWhite}/>
    }
  }

  displayArrow = () => {
    if(this.props.currentPage === 1){
      return <img id="arrow" src={ArrowDownBlack}/>
    }
    else if(this.props.currentPage === 5){
      return <img id="arrow" src={ArrowUpBlack}/>
    }
    else {
      return <img id="arrow" src={ArrowDownWhite}/>
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
