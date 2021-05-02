import React, {Component} from 'react';
import WorkTimelineItem from './worktimeline-item';
import $ from "jquery";
import _ from "lodash";
import baronFigFeaturedImg from '../assets/works/baronfig/baronfig_home.svg';
import haikuProjectFeaturedImg from '../assets/works/haikuProject/haiku-project_home.svg';
import error404FeaturedImg from '../assets/works/404/error-404.png';
import adriftFeaturedImg from '../assets/works/adrift/adrift_home.jpg';
import codePeterFeaturedImg from '../assets/logo/logo_black.svg';
import '../assets/styling/worktimeline.css';

var smoothScroll = require('smoothscroll');

var caseStudyInfo = {
  baronFig: {title: "Baronfig", about: "Tools for Thinkers."},
  haikuProject: {title: "The Global Haiku Project", about: "Build haiku with people around the world."},
  error404: {title: "Error 404", about: "Page not found."},
  adrift: {title: "Bottle Adrift", about: "For every message, there’s a receiver."},
  codePeter: {title: "codepeter", about: "Hi, I'm Peter."}
}

class WorkTimeline extends Component {
  constructor(){
    super();
    this.state = {
      styles: {
        paddingRight: 0,
        paddingLeft: 0,
        blurbLeft: 0,
      },
      containerWidth: 0,
      scrollLeft: 0,
      scrollDirection: null,
      triggerItemSizeCheck: false,
      initialGrowth: true,
      offsetLeftCurrentGrown: 0,
      offsetInitialValues: []
    }
  }

  componentDidMount(){
    this.preventBackButtonOnContainerScroll()
    $('.worktimeline-container').on('scroll', _.throttle(function(event){
      this.handleContainerScroll(event);
    }.bind(this), 25));
    // $('.worktimeline-container').on('touchmove', function(e){
    //   e.preventDefault()
    // })
    window.addEventListener('resize', this.setPaddingLeftAndRight)
    this.setState({containerWidth: document.getElementsByClassName('worktimeline-container')[0].scrollWidth})
    this.setPaddingLeftAndRight()
    window.addEventListener("keydown", this.leftAndRightKeyEventListener);
    // $("body").keydown((e) => this.leftAndRightKeyEventListener(e))
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.setPaddingLeftAndRight)
    window.removeEventListener('keydown', this.leftAndRightKeyEventListener)
  }

  preventBackButtonOnContainerScroll = () => {
   // This code is only valid for Mac
   if (!navigator.userAgent.match(/Macintosh/)) {
     return;
   }

   // Detect browsers
   var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
   var is_safari = navigator.userAgent.indexOf("Safari") > -1;
   var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

   // Handle scroll events in Chrome, Safari, and Firefox
   if (is_chrome || is_safari || is_firefox) {
     $(window).on('mousewheel', function (e) {
       var prevent_left, prevent_up;

       // If none of the parents can be scrolled left when we try to scroll left
       prevent_left = e.deltaX < 0 && $(e.target).parents().filter(function() {
         return $(this).scrollLeft() > 0;
       }).length === 0;

       // If none of the parents can be scrolled up when we try to scroll up
       prevent_up = e.deltaY > 0 && !$(e.target).parents().filter(function() {
         return $(this).scrollTop() > 0;
       }).length === 0;

       // Prevent futile scroll, which would trigger the Back/Next page event
       if (prevent_left || prevent_up) {
         e.preventDefault();
       }
     });
   }
}

  leftAndRightKeyEventListener = (e) => {
    if(e.keyCode === 37) { // left arrow key
      let currentIndex = this.state.offsetInitialValues.indexOf(this.state.offsetLeftCurrentGrown)
      if(currentIndex > 0){
        $(document.getElementsByClassName('worktimeline-container')).animate({
          scrollLeft: this.state.offsetInitialValues[currentIndex - 1] - 25
        })
      }
    }
    else if(e.keyCode === 39) { // right arrow key
      let currentIndex = this.state.offsetInitialValues.indexOf(this.state.offsetLeftCurrentGrown)
      if(currentIndex < 4){
        $(document.getElementsByClassName('worktimeline-container')).animate({
          scrollLeft: this.state.offsetInitialValues[currentIndex + 1] - 25
        })
      }
    }
  }


  updateInitialOffsetLeftValues = (newAddition) => {
    this.state.offsetInitialValues.push(newAddition)
  }

  updateOffsetLeftCurrentGrown = (offsetLeft) => {
    this.setState({offsetLeftCurrentGrown: offsetLeft})
  }

  resetInitialGrowth = () => {
    this.setState({initialGrowth: false})
  }


  setScrollDirection = (e) => {
    if(e.target.scrollLeft > this.state.scrollLeft){
      this.setState({
        scrollLeft: e.target.scrollLeft,
        scrollDirection: 'right'
      })
    }
    else if(e.target.scrollLeft < this.state.scrollLeft){
      this.setState({
        scrollLeft: e.target.scrollLeft,
        scrollDirection: 'left'
      })
    }
  }

  setPaddingLeftAndRight = () => {
    let windowWidth = window.innerWidth
    let elementWidth = document.getElementsByClassName('blurb')[0].clientWidth
    let elementLeft = document.getElementsByClassName('blurb')[0].offsetLeft
    let paddingRight = (windowWidth) - (elementWidth + elementLeft) + (elementWidth - 290)
    let blurbLeft = Math.ceil((document.getElementsByClassName('blurb')[0].getBoundingClientRect().left + 30))
    let containerWidth = document.getElementsByClassName('worktimeline-container')[0].scrollWidth

    // Adding 30 because offsetLeft does not include element padding (just margin).
    // Subract 40 to offset the width of a timeline square.

    let paddingLeft = document.getElementsByClassName('blurb')[0].offsetLeft + 30 - 40

    this.setState({
      styles: {
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
        blurbLeft: blurbLeft,
      },
      containerWidth: containerWidth
    }, () => {this.initialItemGrowth()})
  }

  initialItemGrowth = () => {
    this.setTriggerItemSizeCheck(true)
    // document.getElementsByClassName('worktimeline-container')[0].scrollTo(1000, 1)
  }


  setTriggerItemSizeCheck = (bool) => {
    this.setState({triggerItemSizeCheck: bool})
  }

  handleContainerScroll = (e) => {
    if(e.target.scrollLeft >= 0){
      this.setTriggerItemSizeCheck(true)
      this.setScrollDirection(e)
    }
  }

  render(){
    return(
      <div>
        <div ref="worktimelineContainer" className='worktimeline-container' style={this.state.styles}>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} blurbLeft={this.state.styles.blurbLeft} setTriggerItemSizeCheck={this.setTriggerItemSizeCheck} initialGrowth={this.state.initialGrowth} resetInitialGrowth={this.resetInitialGrowth} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.baronFig} featuredImg={baronFigFeaturedImg} first={true}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='fig-to-red' colorAnimationReverse='blue-to-red' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.haikuProject} featuredImg={haikuProjectFeaturedImg}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='red-to-blue' colorAnimationReverse='aqua-to-blue' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.error404} featuredImg={error404FeaturedImg}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='blue-to-aqua' colorAnimationReverse='black-to-aqua' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.adrift} featuredImg={adriftFeaturedImg}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='aqua-to-black' colorAnimationReverse='black-to-aqua' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.codePeter} featuredImg={codePeterFeaturedImg}/>
            <div style={{width: '1365px', paddingLeft: '140px', position: 'absolute', top: '50%', transform: 'translateY(-50%)',  zIndex: '-1'}}>
              <div className={this.props.colorAnimation} style={{display: 'inline-block', verticalAlign: 'middle', height: '8px', width: '100%', backgroundColor: this.props.initialColor, position: 'relative',}}></div>
              <div className={this.props.colorAnimation} style={{display: 'inline-block', verticalAlign: 'middle', height: '40px', width: '40px', background: this.props.initialColor, position: 'relative', borderRadius: '20px', right: '2px'}}></div>
            </div>
        </div>
      </div>
    )
  }
}

export default WorkTimeline;
