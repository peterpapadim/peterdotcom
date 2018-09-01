import React, {Component} from 'react';

class WorkTimelineItem extends Component {
  constructor(){
    super();
    this.state = {
      elementLeft: 0,
      blurbLeft: 0,
      growAnimation: 'shrink'
    }
  }

  componentDidMount(){
    this.setState({
      elementLeft: this.refs.workTimelineItem.getBoundingClientRect().left
    },)
    document.getElementsByClassName('worktimeline-container')[0].addEventListener('scroll', this.setElementLeft)
  }


  componentWillReceiveProps(nextProps){
    this.setState({
      elementLeft: this.refs.workTimelineItem.getBoundingClientRect().left,
      blurbLeft: nextProps.blurbLeft
    })
    nextProps.expand ? this.setState({growAnimation: 'grow'}) : null
  }

  setElementLeft = () => {
    this.setState({
      elementLeft: this.refs.workTimelineItem.getBoundingClientRect().left,
    }, this.checkLocation())
  }

  checkLocation = () => {
    console.log("blurb-left", this.state.blurbLeft)
    console.log("element-left", this.state.elementLeft)
    if(this.state.elementLeft < this.state.blurbLeft - 188){
      this.setState({growAnimation: 'shrink'})
    }
     else if(this.state.elementLeft <= this.state.blurbLeft + 100){
      this.setState({growAnimation: 'grow'})
    }
    else if(this.state.elementLeft > this.state.blurbLeft + 188){
      this.setState({growAnimation: 'shrink'})
    }
  }

  render(){
    return(
      <div style={{height: '250px', width: '250px', display: 'inline-block', margin: '0 25px', zIndex: '2'}}>
        <div className={this.state.growAnimation} ref="workTimelineItem" style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', height: '220px', width: '220px', borderRadius: '20px', boxShadow: '0 2px 10px 0 #E8EEF5', background: 'white', margin: '0 auto'}}></div>
      </div>
    )
  }
}

export default WorkTimelineItem;
