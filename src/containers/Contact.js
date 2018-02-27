import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import Menu from './Menu';

class Contact extends Component {

  contactForm = () => {
    return(
      <form>
        <label>Name</label><br/>
        <input type="text"/><br/>
        <label>Email</label><br/>
        <input type="email"/><br/>
        <label>Subject</label><br/>
        <input type="text"/><br/>
        <label>Message</label><br/>
        <textarea></textarea><br/>
        <input id="contact-submit" type="submit" value="send"/>
      </form>
    )
  }

  render(){
    return(
      <div id="contact-page-container">
        <div className="container-fluid" id="contact-page">
          <div className="row" id="contact-menu-row">
            <MenuButtons contactMenu={true} handleMenuClick={this.props.handleMenuClick} menuClicked={this.props.menuClicked} handleLogoClick={this.props.handleLogoClick} mobile={this.props.mobile}/>
          </div>
          {
            this.props.mobile ?
            <div className="row" id="contact-form-row">
              <div className="col-1"></div>
              <div className="col-10">
                <div id="contact-form">
                  {this.contactForm()}
                </div>
              </div>
              <div className="col-1"></div>
            </div> :
            <div className="row" id="contact-form-row">
              <div className="col-1"></div>
              <div className="col-5">
                <div id="contact-form">
                  {this.contactForm()}
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          }
       </div>
       {this.props.menuClicked ? <Menu handleMenuClick={this.props.handleMenuClick} handleLogoClick={this.props.handleLogoClick}/> : null}
    </div>
    )
  }
}

export default Contact;
