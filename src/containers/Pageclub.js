import React, {Component} from 'react';
import PageclubBackground from '../assets/backgrounds/wallpaper_pageclub.png';

class Pageclub extends Component {

  displayImage = () => {
    if(this.props.nextPage === 4 || this.props.currentPage === 4){
      return <img className="background-png" alt="pageclub" src={ PageclubBackground } />
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

export default Pageclub;
