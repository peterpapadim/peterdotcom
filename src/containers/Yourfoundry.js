import React, {Component} from 'react';
import YourfoundryBackground from '../assets/backgrounds/wallpaper_yourfoundry.svg';

class Yourfoundry extends Component {

  displayImage = () => {
    if(this.props.nextPage === 2 || this.props.currentPage === 2){
      return <img className="background-svg" alt="yourfoundry" src={ YourfoundryBackground } />
    }
    else{
      return <img alt="empty" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
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

export default Yourfoundry;
