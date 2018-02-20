import React, { Component } from 'react';
import Page from './containers/Page';
import $ from 'jquery';
var pagepiling = require('pagepiling.js');

class App extends Component {

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
          'tooltips': ['Home', 'YourFoundry', 'Reelsquad', 'Instalytics']
      },
     	normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){
      if([1, 3, 4].includes(nextIndex)){
        bindedThis.setNavColor("black")
        bindedThis.setNavActive("")
      }
      if([2].includes(nextIndex)){
        bindedThis.setNavColor("white")
      }
    },
		afterLoad: function(anchorLink, index){
      if(anchorLink === "yourfoundry"){
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


  render() {
    return (
      <div id="App" className="App">
        <Page id="intro-container"/>
        <Page id="yourfoundry-container"/>
        <Page id="reelsquad-container"/>
        <Page id="instalytics-container"/>
      </div>
    );
  }
}

export default App;
