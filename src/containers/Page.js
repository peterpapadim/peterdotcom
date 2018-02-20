import React, { Component } from 'react';
import LogoWhite from '../assets/logo/logo_white.svg';
import LogoBlack from '../assets/logo/logo_black.svg';
import MenuWhite from '../assets/menu/menu_white.svg';
import MenuBlack from '../assets/menu/menu_black.svg';

class Page extends Component {


  displayLogo = () => {
    if([1, 4].includes(this.props.currentPage)){
      return <img id="logo" src={LogoBlack}/>
    }
    else {
      return <img id="logo" src={LogoWhite}/>
    }
  }

  displayMenu = () => {
    if([1, 4].includes(this.props.currentPage)){
      return <img id="menu" src={MenuBlack}/>
    }
    else {
      return <img id="menu" src={MenuWhite}/>
    }
  }

  render(){
    return(
      <div id={this.props.id} className="container-fluid section">
        <div className="col-12" id="page-container">
          <div className="row" id="logo-menu-container">
            <div className="col-1"></div>
            <div className="col-1">{this.displayLogo()}</div>
            <div className="col-8"></div>
            <div className="col-1" id="menu-container">{this.displayMenu()}</div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page;
