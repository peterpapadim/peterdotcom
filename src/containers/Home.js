import React, {Component} from 'react';
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

  render(){
    return (
      <div className="home">
        <div className="home item"><p className="header">Hi, I'm Peter!</p></div>
        <div className="home item"><p className="blurb">A Brooklyn hipster who doubles as a Full Stack Developer with a focus in Frontend Engineering.</p></div>
      </div>
    )
  }
}

export default Home;
