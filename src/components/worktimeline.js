import React, {Component} from 'react';
import WorkTimelineItem from './worktimeline-item';
import '../assets/styling/worktimeline.css';

var smoothScroll = require('smoothscroll');

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
      lineAnimation: '',
      scrollLeft: 0,
      scrollDirection: 'right',
      initialGrowth: true
    }
  }

  componentDidMount(){
    this.setState({containerWidth: document.getElementsByClassName('worktimeline-container')[0].scrollWidth})
    window.addEventListener('resize', this.setPaddingLeftAndRight)
    document.getElementsByClassName('worktimeline-container')[0].addEventListener('scroll', this.setScrollDirection)
    this.setPaddingLeftAndRight()
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.setPaddingLeftAndRight);
  }

  resetInitialGrowth = () => {
    this.setState({initialGrowth: false})
  }

  setLineAnimation = (className) => {
    this.setState({lineAnimation: className})
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

    // this.setState({
    //     styles: Object.assign(
    //       {},
    //       this.state.styles,
    //       {
    //         paddingRight: paddingRight,
    //         paddingLeft: paddingLeft,
    //         blurbLeft: blurbLeft,
    //         containerWidth: containerWidth
    //       }
    //     )
    // })

    this.setState({
      styles: {
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
        blurbLeft: blurbLeft,
      },
      containerWidth: containerWidth
    }, this.initialItemGrowth())
  }

  initialItemGrowth = () => {
    // debugger
    // smoothScroll(this.refs.testing1);
  }

  render(){
    return(
      <div>
        <div ref="worktimelineContainer" className='worktimeline-container' style={this.state.styles}>
          <WorkTimelineItem scrollDirection={this.state.scrollDirection} setLineAnimation={this.setLineAnimation} blurbLeft={this.state.styles.blurbLeft} initialGrowth={this.state.initialGrowth} resetInitialGrowth={this.resetInitialGrowth}/>
          <WorkTimelineItem scrollDirection={this.state.scrollDirection} setLineAnimation={this.setLineAnimation} lineAnimationForward='black-to-gray' lineAnimationReverse='blue-to-gray' blurbLeft={this.state.styles.blurbLeft}/>
          <WorkTimelineItem scrollDirection={this.state.scrollDirection} setLineAnimation={this.setLineAnimation} lineAnimationForward='gray-to-blue' lineAnimationReverse='green-to-blue' blurbLeft={this.state.styles.blurbLeft}/>
          <WorkTimelineItem scrollDirection={this.state.scrollDirection} setLineAnimation={this.setLineAnimation} lineAnimationForward='blue-to-green' lineAnimationReverse='yellow-to-green' blurbLeft={this.state.styles.blurbLeft}/>
          <WorkTimelineItem scrollDirection={this.state.scrollDirection} setLineAnimation={this.setLineAnimation} lineAnimationForward='green-to-yellow' lineAnimationReverse='yellow-to-green' blurbLeft={this.state.styles.blurbLeft}/>
            <div style={{width: '1600px', paddingLeft: '50px', position: 'absolute', top: '50%', transform: 'translateY(-50%)',  zIndex: '-1'}}>
              <div className={this.state.lineAnimation} style={{display: 'inline-block', verticalAlign: 'middle', height: '8px', width: '100%', backgroundColor: this.props.lineColor, position: 'relative',}}></div>
              <div className={this.state.lineAnimation} style={{display: 'inline-block', verticalAlign: 'middle', height: '40px', width: '40px', background: this.props.lineColor, position: 'relative', borderRadius: '20px', right: '2px'}}></div>
            </div>
        </div>
      </div>
    )
  }
}

export default WorkTimeline;
