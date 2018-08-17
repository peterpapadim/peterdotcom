import React, {Component} from 'react';
import WorkTimelineItem from './worktimeline-item';
import '../assets/styling/worktimeline.css';

class WorkTimeline extends Component {
  constructor(){
    super();
    this.state = {
      styles: {
        paddingRight: 0,
        paddingLeft: 0
      }
    }
  }

  componentDidMount(){
    this.setPaddingLeftAndRight()
    window.addEventListener('resize', this.setPaddingLeftAndRight)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.setPaddingLeftAndRight);
  }

  setPaddingLeftAndRight = () => {
    let windowWidth = window.innerWidth
    let elementWidth = document.getElementsByClassName('blurb')[0].clientWidth
    let elementLeft = document.getElementsByClassName('blurb')[0].offsetLeft
    let paddingRight = (windowWidth) - (elementWidth + elementLeft) + (elementWidth - 290)

    // Adding 30 because offsetLeft does not include element padding (just margin).
    // Subract 40 to offset the width of a timeline square.

    let paddingLeft = document.getElementsByClassName('blurb')[0].offsetLeft + 30 - 40

    this.setState({
        styles: Object.assign(
          {},
          this.state.styles,
          {
            paddingRight: paddingRight,
            paddingLeft: paddingLeft
          }
        )
    })
  }


  render(){
    return(
        <div className='worktimeline-container' style={this.state.styles}>
          <WorkTimelineItem />
          <WorkTimelineItem />
          <WorkTimelineItem />
          <WorkTimelineItem />
          <WorkTimelineItem />
        </div>
    )
  }
}

export default WorkTimeline;
