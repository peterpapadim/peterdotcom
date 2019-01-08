import React, {Component} from 'react';
import $ from "jquery";

class WorkTimelineItem extends Component {
  constructor(){
    super();
    this.state = {
      offsetLeftInitial: 0,
      offsetLeftAdjusting: 0,
      blurbLeft: 0,
      growAnimation: 'shrink',
      grownStatus: false
    }
  }

  componentDidMount(){
    let offsetValue = $(this.refs.workTimelineItem).offset().left
    this.setState({offsetLeftInitial: offsetValue})
    this.props.updateInitialOffsetLeftValues(offsetValue)
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.triggerItemSizeCheck){
      this.setState({
        blurbLeft: nextProps.blurbLeft,
        offsetLeftAdjusting: $(this.refs.workTimelineItem).offset().left
      }, this.checkLocation2())
    }
  }

  checkLocation2 = () => {
    let offsetLeftInitial = this.state.offsetLeftInitial
    let offsetLeftAdjusting = this.state.offsetLeftAdjusting
    let blurbLeft = this.state.blurbLeft
    let title = this.props.caseStudyInfo.title
    let about = this.props.caseStudyInfo.about

    if(this.props.scrollDirection === 'right' || this.props.initialGrowth){
      if(!this.state.grownStatus){
        if( offsetLeftAdjusting > blurbLeft - 280 && offsetLeftAdjusting <= blurbLeft + 40){
          if(this.state.growAnimation === 'hovered'){
            this.setState({growAnimation: 'hovered-to-grow', grownStatus: true})
          }
          else{
            this.setState({growAnimation: 'grow', grownStatus: true})
          }
          this.props.setColorAnimation(this.props.colorAnimationForward)
          this.props.updateTitleAndAbout(title, about)
          this.props.updateOffsetLeftCurrentGrown(this.state.offsetLeftInitial)
          if(this.props.initialGrowth){this.props.resetInitialGrowth()}
        }
      }
      else{
        if( !(offsetLeftAdjusting > blurbLeft - 280 && offsetLeftAdjusting <= blurbLeft + 40)){
          // if(this.props.id === '2'){console.log('shrink')}
          this.setState({growAnimation: 'shrink', grownStatus: false})
        }
      }
    }
    else if(this.props.scrollDirection === 'left'){
      if(!this.state.grownStatus){
        if( offsetLeftAdjusting > blurbLeft - 120 && offsetLeftAdjusting <= blurbLeft + 200){
          if(this.state.growAnimation === 'hovered'){
            this.setState({growAnimation: 'hovered-to-grow', grownStatus: true})
          }
          else{
            this.setState({growAnimation: 'grow', grownStatus: true})
          }
          this.props.setColorAnimation(this.props.colorAnimationReverse)
          this.props.updateTitleAndAbout(title, about)
          this.props.updateOffsetLeftCurrentGrown(this.state.offsetLeftInitial)
          if(this.props.initialGrowth){this.props.resetInitialGrowth()}
        }
      }
      else{
        if( !(offsetLeftAdjusting > blurbLeft - 120 && offsetLeftAdjusting <= blurbLeft + 200)){
          // if(this.props.id === '2'){console.log('shrink')}
          this.setState({growAnimation: 'shrink', grownStatus: false})
        }
      }
    }
  }

  handleItemMouseEnter = () => {
    if(!this.state.grownStatus){
      this.setState({growAnimation: 'hovered'})
    }
  }

  handleItemMouseLeave = () => {
    if(!this.state.grownStatus){
      if(this.state.growAnimation !== 'shrink'){
        this.setState({growAnimation: 'rested'})
      }
    }
  }

  handleItemClick = () => {
    $(document.getElementsByClassName('worktimeline-container')).animate({
      scrollLeft: this.state.offsetLeftInitial - 25
    })
  }


  render(){
    return(
      <div ref="workTimelineItem" onClick={this.handleItemClick} onMouseEnter={this.handleItemMouseEnter} onMouseLeave={this.handleItemMouseLeave} style={{height: '270px', width: '270px', display: 'inline-block', margin: '0 25px', zIndex: '2', cursor: 'pointer'}}>
        <div className={this.state.growAnimation} style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', height: '220px', width: '220px', borderRadius: '20px', boxShadow: '0 2px 10px 0 #E8EEF5', background: 'white', margin: '0 auto'}}></div>
      </div>
    )
  }
}

export default WorkTimelineItem;
