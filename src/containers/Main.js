import React, { Component } from 'react';
import Codepeter from './Codepeter';
import Yourfoundry from './Yourfoundry';
import Reelsquad from './Reelsquad';
import Pageclub from './Pageclub';
import Instalytics from './Instalytics';
import MenuButtons from './MenuButtons';
import Menu from './Menu';
import Contact from './Contact';
import $ from 'jquery';
var pagepiling = require('pagepiling.js');

var blurbs = [
  ["Code Peter", "Peter Papadimitropoulos. Full Stack Developer based out of New York City."],
  ["YourFoundry", "A manufacturing management service for hardware startups."],
  ["Reelsquad", "Create A queue of movies to watch and share with your group of friends."],
  ["Pageclub", "Arrange a book trade by showing your friends what books you have available at home."],
  ["Instalytics", "Find your most liked photo, most used hashtag, and most interactive follower."]
]

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: 1,
      nextPage: 1,
      // menuClicked: false,
      // mobile: false
    }
  }

  componentDidMount() {
   // if(window.innerWidth < 576){this.setState({mobile: true})}
   // else{this.setState({mobile: false})}
   // $(window).on('resize', () => {
   //   if(window.innerWidth < 576){
   //     this.setState({mobile: true})
   //   }
   //   else{this.setState({mobile: false})}
   // })
   this.timerId = setInterval(this.arrowBounceEvery5Seconds, 5000)
   let bindedThis = this
   window.$('#App').pagepiling({
	    menu: null,
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['home', 'yourfoundry', 'reelsquad', 'pageclub', 'instalytics'],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': []
      },
     	normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){
      bindedThis.updateNextPage(nextIndex)
      clearInterval(bindedThis.timerId);
    },
		afterLoad: function(anchorLink, index){
      bindedThis.updateCurrentPage(index)
      bindedThis.timerId = setInterval(bindedThis.arrowBounceEvery5Seconds, 5000)
    },
		afterRender: function(){},
	});

 }


 updateCurrentPage = (page) => {
   this.setState({currentPage: page})
 }

 updateNextPage = (page) => {
   this.setState({nextPage: page})
 }


 // handleMenuClick = () => {
 //   if(this.state.menuClicked){
 //     this.setState({menuClicked: false})
 //   }
 //   else{
 //     this.setState({menuClicked: true})
 //   }
 // }

 arrowBounceEvery5Seconds = () => {
   $("#arrow-container").addClass("animated")
   $("#arrow-container").addClass("infinite")
   $("#arrow-container").addClass("bounce")
   setTimeout(() => {
     $("#arrow-container").removeClass("animated")
     $("#arrow-container").removeClass("infinite")
     $("#arrow-container").removeClass("bounce")
   }, 1000)
 }


  render() {
    return (
      <div id="App" className="App">
        <Codepeter currentPage={this.state.currentPage} nextPage={this.state.nextPage}/>
        <Yourfoundry currentPage={this.state.currentPage} nextPage={this.state.nextPage}/>
        <Reelsquad currentPage={this.state.currentPage} nextPage={this.state.nextPage}/>
        <Pageclub currentPage={this.state.currentPage} nextPage={this.state.nextPage}/>
        <Instalytics currentPage={this.state.currentPage} nextPage={this.state.nextPage}/>
        <MenuButtons currentPage={this.state.currentPage}
                     handleMenuClick={this.props.handleMenuClick}
                     menuClicked={this.props.menuClicked}
                     currentPage={this.state.currentPage}
                     info={blurbs}
                     mobile={this.props.mobile}
                     contactMenu={false}
                     history={this.props.history}
                     handleLogoClick={this.props.handleLogoClick}
                     />
        {this.props.menuClicked ? <Menu handleMenuClick={this.props.handleMenuClick} handleLogoClick={this.props.handleLogoClick}/> : null}
      </div>
    );
  }
}

export default App;
