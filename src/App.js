import React, { Component } from 'react';
import Page from './containers/Page';
import MenuButtons from './containers/MenuButtons';
import $ from 'jquery';
var pagepiling = require('pagepiling.js');

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: 1,
      previousPage: 1
    }
  }

  componentDidMount() {
   let bindedThis = this
   window.$('#App').pagepiling({
	    menu: null,
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['home', 'yourfoundry', 'reelsquad', "pageclub", 'instalytics'],
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
      bindedThis.updatePreviousPage(index)
      if([1, 5].includes(nextIndex)){
        bindedThis.setNavColor("black")
      }
      if([2, 3, 4].includes(nextIndex)){
        bindedThis.setNavColor("white")
      }
    },
		afterLoad: function(anchorLink, index){
      console.log(anchorLink, index, bindedThis.state.previousPage)
      if(["yourfoundry", "reelsquad", "pageclub"].includes(anchorLink)){
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

 updatePreviousPage = (page) => {
   this.setState({previousPage: page})
 }


  render() {
    return (
      <div id="App" className="App">
        <MenuButtons currentPage={this.state.currentPage}/>
        <Page id="intro-container"/>
        <Page id="yourfoundry-container"/>
        <Page id="reelsquad-container"/>
        <Page id="pageclub-container"/>
        <Page id="instalytics-container"/>
      </div>
    );
  }
}

export default App;
