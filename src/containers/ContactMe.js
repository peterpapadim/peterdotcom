import React, { Component } from 'react';
import Line from '../assets/contact_me_line.svg';

const email = "mailto:ppapadim12@gmail.com"

class ContactMe extends Component {

  handleContactMeClick = () => {
    window.open(email)
  }

  render(){
    return(
      <div className="container-fluid" id="contact-me-container">
        <div className="row" id="contact-me-line">
          <div className="col-12">
            <img id="contact-me-brand-line" src={Line} alt="brand-line" />
          </div>
        </div>
        <div className="row" id="contact-me-content-container">
          <div className="col-12">
            <p id="contact-me-content">Looking to partner on a project, talk about code, or just grab a cup of coffee together, feel free to <em id="contact-me-button" onClick={this.handleContactMeClick}>contact me ⟶</em></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe;
