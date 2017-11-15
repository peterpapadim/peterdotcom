import React, { Component } from 'react';
import Line from '../assets/contact_me_line.svg';

class ContactMe extends Component {

  render(){
    return(
      <div className="container-fluid" id="contact-me-container">
        <div className="row" id="contact-me-line">
          <div className="col-12">
            <img id="contact-me-brand-line" src={Line} alt="brand-line" />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe;
