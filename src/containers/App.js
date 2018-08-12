import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from '../components/navbar';

class App extends Component {

  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){

  }


  render(){
    return(
      <div style={{background: '#F8F9FC'}}>
        <div style={{height: '100%', background: "url('assets/background/bg_wave.svg')", backgroundSize: 'cover'}}>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route path="/" render={() => (<Home />)}/>
            </Switch>
          </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;
