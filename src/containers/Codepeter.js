import React, {Component} from 'react';
import CodePeterBackground from '../assets/backgrounds/wallpaper_codepeter.svg';

class Codepeter extends Component {

  displayImage = () => {
    if(this.props.nextPage === 1 || this.props.currentPage === 1){
      return <img className="background-svg" src={ CodePeterBackground } />
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

export default Codepeter;
