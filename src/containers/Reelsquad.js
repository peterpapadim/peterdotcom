import React, {Component} from 'react';
import ReelsquadBackground from '../assets/backgrounds/wallpaper_reelsquad.png';

class Reelsquad extends Component {

  displayImage = () => {
    if(this.props.nextPage === 3 || this.props.currentPage === 3){
      return <img className="background-png" src={ ReelsquadBackground } />
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

export default Reelsquad;
