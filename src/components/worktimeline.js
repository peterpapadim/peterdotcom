import React, {Component} from 'react';
import WorkTimelineItem from './worktimeline-item';
import $ from "jquery";
import baronFigFeaturedImg from '../assets/case-studies/baron-fig/baron-fig_home.png';
import reelsquadFeaturedImg from '../assets/case-studies/reelsquad/reelsquad_home.png';
import pageclubFeaturedImg from '../assets/case-studies/pageclub/pageclub_home.png';
import instalyticsFeaturedImg from '../assets/case-studies/instalytics/instalytics_home.png';
import codePeterFeaturedImg from '../assets/case-studies/codepeter/code-peter_home.png';
import '../assets/styling/worktimeline.css';

var smoothScroll = require('smoothscroll');

var caseStudyInfo = {
  baronFig: {title: "Baron Fig", about: "We make tools for thinkers."},
  reelSquad: {title: "ReelSquad", about: "Groups and squads meets movie nights."},
  pageClub: {title: "Page Club", about: "Page Club sample text"},
  instalytics: {title: "Instalytics", about: "Instalytics sample text"},
  codePeter: {title: "CodePeter", about: "CodePeter sample text"}
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

  leftAndRightKeyEventListener = (e) => {
    if(e.keyCode == 37) { // left arrow key
      let currentIndex = this.state.offsetInitialValues.indexOf(this.state.offsetLeftCurrentGrown)
      if(currentIndex > 0){
        $(document.getElementsByClassName('worktimeline-container')).animate({
          scrollLeft: this.state.offsetInitialValues[currentIndex - 1] - 25
        })
      }
    }
    else if(e.keyCode == 39) { // right arrow key
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
    this.setTriggerItemSizeCheck(true)
    this.setScrollDirection(e)
  }

  render(){
    return(
      <div>
        <div onScroll={(e) => this.handleContainerScroll(e)} ref="worktimelineContainer" className='worktimeline-container' style={this.state.styles}>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} blurbLeft={this.state.styles.blurbLeft} setTriggerItemSizeCheck={this.setTriggerItemSizeCheck} initialGrowth={this.state.initialGrowth} resetInitialGrowth={this.resetInitialGrowth} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.baronFig} featuredImg={baronFigFeaturedImg} first={true}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='green-to-blue' colorAnimationReverse='yellow-to-blue' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.reelSquad} featuredImg={reelsquadFeaturedImg}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='blue-to-yellow' colorAnimationReverse='purple-to-yellow' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.pageClub} featuredImg={pageclubFeaturedImg}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='yellow-to-purple' colorAnimationReverse='navy-to-purple' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.instalytics} featuredImg={instalyticsFeaturedImg}/>
          <WorkTimelineItem updateInitialOffsetLeftValues={this.updateInitialOffsetLeftValues} updateOffsetLeftCurrentGrown={this.updateOffsetLeftCurrentGrown} triggerItemSizeCheck={this.state.triggerItemSizeCheck} scrollDirection={this.state.scrollDirection} setColorAnimation={this.props.setColorAnimation} colorAnimationForward='purple-to-navy' colorAnimationReverse='navy-to-purple' blurbLeft={this.state.styles.blurbLeft} updateTitleAndAbout={this.props.updateTitleAndAbout} caseStudyInfo={caseStudyInfo.codePeter} featuredImg={codePeterFeaturedImg}/>
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
