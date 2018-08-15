import React, {Component} from 'react';

class WorkTimelineItem extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div style={{height: '220px', width: '220px', background: 'lightgray', display: 'inline-block', margin: '0 40px', borderRadius: '20px'}}></div>
    )
  }
}

export default WorkTimelineItem;
