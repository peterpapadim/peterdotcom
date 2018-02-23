import React, {Component} from 'react';
import Exit from '../assets/menu/close_white.svg';

class Menu extends Component {
  render(){
    return(
      <div id="menu-page" className="container-fluid">
          <div className="row" id="exit-container">
            <div className="col-10"></div>
            <div className="col-1" id="menu-container">
              <img id="menu" src={Exit} onClick={this.props.handleMenuClick}/>
            </div>
            <div className="col-1"></div>
          </div>
      </div>
    )
  }
}

export default Menu;
