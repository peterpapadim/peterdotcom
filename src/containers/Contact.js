import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import SendingLoader from '../assets/loaders/ripple_130.svg';
import Menu from './Menu';
import { Icon } from 'semantic-ui-react';

class Contact extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      loading: false,
      sent: false,
      error: false
    }
  }

  contactForm = () => {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label><br/>
        <input type="text" required value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/><br/>
        <label>Email</label><br/>
        <input type="email" required value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/><br/>
        <label>Subject</label><br/>
        <input type="text" required value={this.state.subject} onChange={(event) => this.setState({subject: event.target.value})}/><br/>
        <label>Message</label><br/>
        <textarea required value={this.state.message} onChange={(event) => this.setState({message: event.target.value})}></textarea><br/>
        { this.formSubmit() }
      </form>
    )
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.setState({loading: true, name: "", email: "", subject: "", message: ""})
    window.emailjs.send("gmail", "codepeter", {
      "name": this.state.name,
      "email": this.state.email,
      "subject": this.state.subject,
      "message": this.state.message
    }).then((response) => {
      this.setState({loading: false, sent: true})
    }, (err) => {
      this.setState({loading: false, error: true})
    });
  }

  formSubmit = () => {
    if(this.state.loading){
      return this.displaySendingLoader()
    }
    else if(this.state.sent){
      return this.displaySentIcon()
    }
    else if(this.state.error){
      return this.displayErrorIcon()
    }
    else{
      return <input id="contact-submit" type="submit" value="send"/>
    }
  }

  displaySendingLoader = () => {
    return(<img id="loading-submit" src={SendingLoader} alt="sending-loader" />)
  }

  displaySentIcon = () => {
    return(<Icon id="submit-complete" className="animated rubberBand" size="huge" name="checkmark" color="black"/>)
  }

  displayErrorIcon = () => {
    return(<Icon id="submit-complete" className="animated rubberBand" size="huge" name="exclamation triangle" color="black"/>)
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
              <div className="col-6">
                <div id="contact-form">
                  {this.contactForm()}
                </div>
              </div>
              <div className="col-2">
              </div>
              <div className="col-4">
                <div id="project-info-container">
                  <p className="title">Contact</p>
                  <p className="blurb">Interested in partnering on a cool project or just want to chat? Email me. </p>
                </div>
              </div>
            </div>
          }
       </div>
       {this.props.menuClicked ? <Menu handleMenuClick={this.props.handleMenuClick} handleLogoClick={this.props.handleLogoClick} mobile={this.props.mobile}/> : null}
    </div>
    )
  }
}

export default Contact;
