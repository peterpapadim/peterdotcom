import React, {Component} from 'react';
import InstalyticsBackground from '../assets/backgrounds/wallpaper_instalytics.svg';

class Instalytics extends Component {

  displayImage = () => {
    if(this.props.nextPage === 5 || this.props.currentPage === 5){
      return <img src={ InstalyticsBackground } />
    }
    else{
      return <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    }
  }

  render(){
    return(
      <div className="container-fluid page-container section">
        {this.displayImage()}
      </div>
    )
  }
}

export default Instalytics;
