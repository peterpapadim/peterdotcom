import React, {Component} from 'react';
import WorkTimeline from '../components/worktimeline';
import '../assets/styling/home.css';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      // styles: {
      //   color: 'red',
      //   fontSize: '20px'
      // }
    }
  }

  handleClick = () => {
    // this.setState({
    //   styles: Object.assign(
    //     {},
    //     this.state.styles,
    //     {color: "blue"}
    //   )
    // })
  }

  componentDidMount(){
    this.props.updatedLoadedComponent(
      {
        homeLoaded: true,
        aboutLoaded: false,
        worksLoaded: false,
        blogLoaded: false,
        resumeLoaded: false
      }
    )
  }

  render(){
    return (
      <div className="home fade-in">
        <div className="home item"><p className="header">Hi, I'm Peter!</p></div>
        <div className="home item"><p className="blurb">A Brooklyn hipster who doubles as a Full Stack Developer with a focus in Frontend Engineering.</p></div>
        <WorkTimeline />
      </div>
    )
  }
}


export default Home;
