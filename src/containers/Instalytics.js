import React, {Component} from 'react';
import InstalyticsBackground from '../assets/backgrounds/wallpaper_instalytics.svg';

class Instalytics extends Component {

  displayImage = () => {
    if(this.props.nextPage === 5 || this.props.currentPage === 5){
      return <img className="background-svg" src={ InstalyticsBackground } />
    }
    else{
      return <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    }
  }

  render(){
    return(
      <div className="container-fluid page-container section">
        <div className="row background-container">
          <div className="col-1"></div>
          <div className="col-10">{this.displayImage()}</div>
          <div className="col-1"></div>
        </div>
      </div>
    )
  }
}

export default Instalytics;
