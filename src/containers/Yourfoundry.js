import React, {Component} from 'react';
import YourfoundryBackground from '../assets/backgrounds/wallpaper_yourfoundry.svg';

class Yourfoundry extends Component {

  displayImage = () => {
    if(this.props.nextPage === 2 || this.props.currentPage === 2){
      return <img src={ YourfoundryBackground } />
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

export default Yourfoundry;
