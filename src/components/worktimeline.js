import React, {Component} from 'react';
import WorkTimelineItem from './worktimeline-item';
import '../assets/styling/worktimeline.css';

class WorkTimeline extends Component {
  constructor(){
    super();
    this.state = {
      styles: {
        paddingRight: 0,
        paddingLeft: 0,
        blurbLeft: 0,
      },
      containerWidth: 0
    }
  }

  componentDidMount(){
    this.setState({containerWidth: document.getElementsByClassName('worktimeline-container')[0].scrollWidth})
    window.addEventListener('resize', this.setPaddingLeftAndRight)
    this.setPaddingLeftAndRight()
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.setPaddingLeftAndRight);
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
    })
  }

  render(){
    return(
      <div>
        <div className='worktimeline-container' style={this.state.styles}>
          <WorkTimelineItem blurbLeft={this.state.styles.blurbLeft} expand={true}/>
          <WorkTimelineItem blurbLeft={this.state.styles.blurbLeft}/>
          <WorkTimelineItem blurbLeft={this.state.styles.blurbLeft}/>
          <WorkTimelineItem blurbLeft={this.state.styles.blurbLeft}/>
          <WorkTimelineItem blurbLeft={this.state.styles.blurbLeft}/>
            <div style={{width: '1500px', paddingLeft: '50px', position: 'absolute', top: '50%', transform: 'translateY(-50%)',  zIndex: '-1'}}>
              <div style={{display: 'inline-block', verticalAlign: 'middle', height: '8px', width: '100%', background: 'lightblue', position: 'relative',}}></div>
              <div style={{display: 'inline-block', verticalAlign: 'middle', height: '40px', width: '40px', background: 'lightblue', position: 'relative', borderRadius: '20px', right: '2px'}}></div>
            </div>
        </div>
      </div>
    )
  }
}

export default WorkTimeline;
