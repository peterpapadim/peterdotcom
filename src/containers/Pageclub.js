import React, {Component} from 'react';
import PageclubBackground from '../assets/backgrounds/wallpaper_pageclub.png';

class Pageclub extends Component {

  displayImage = () => {
    if(this.props.nextPage === 4 || this.props.currentPage === 4){
      return <img src={ PageclubBackground } />
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

export default Pageclub;
