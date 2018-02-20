import React, { Component } from 'react';
import Page from './containers/Page';
import $ from 'jquery';
var pagepiling = require('pagepiling.js');

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: 1
    }
  }

  componentDidMount() {
   let bindedThis = this
   window.$('#App').pagepiling({
	    menu: null,
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['home', 'yourfoundry', 'reelsquad', 'instalytics'],
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
      bindedThis.setNavActive("")
      bindedThis.updateCurrentPage(nextIndex)
      if([1, 4].includes(nextIndex)){
        bindedThis.setNavColor("black")
      }
      if([2, 3].includes(nextIndex)){
        bindedThis.setNavColor("white")
      }
    },
		afterLoad: function(anchorLink, index){
      if(["yourfoundry", "reelsquad"].includes(anchorLink)){
        bindedThis.setNavActive("white")
      }
    },
		afterRender: function(){},
	});

 }

 setNavColor = (color) => {
   let nodes = document.querySelectorAll("#pp-nav span", ".pp-slidesNav span")
   for(let i = 0; i < nodes.length; i++){
     nodes[i].style.borderColor = color
   }
 }

 setNavActive = (color) => {
   document.querySelector("#pp-nav li .active span", ".pp-slidesNav .active span").style.background = color
 }

 updateCurrentPage = (page) => {
   this.setState({currentPage: page})
 }


  render() {
    return (
      <div id="App" className="App">
        <Page id="intro-container" currentPage={this.state.currentPage}/>
        <Page id="yourfoundry-container" currentPage={this.state.currentPage}/>
        <Page id="reelsquad-container" currentPage={this.state.currentPage}/>
        <Page id="instalytics-container" currentPage={this.state.currentPage}/>
      </div>
    );
  }
}

export default App;
