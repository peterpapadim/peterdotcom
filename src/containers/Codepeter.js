import React, {Component} from 'react';
import CodePeterBackground from '../assets/backgrounds/wallpaper_codepeter.svg';

class Codepeter extends Component {

  displayImage = () => {
    if(this.props.nextPage === 1 || this.props.currentPage === 1){
      return <img src={ CodePeterBackground } />
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

export default Codepeter;
