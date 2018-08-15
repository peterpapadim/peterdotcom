import React, {Component} from 'react';
import WorkTimelineItem from './worktimeline-item';
import '../assets/styling/worktimeline.css';

class WorkTimeline extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
        <div className='worktimeline-container'>
          <WorkTimelineItem />
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
