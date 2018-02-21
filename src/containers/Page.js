import React, { Component } from 'react';

class Page extends Component {

  comingSoon = () => {
    return(
    <div><p id="coming-soon">"Dec 17' - Present</p><p>(Coming Soon...)"</p></div>
    )
  }

  projectLinks = () => {
    return (
      <ul id="project-links">
        <li className={this.props.currentPage === 5 ? "project-link-black" : "project-link-white"}>View Demo ⟶</li>
        <li className={this.props.currentPage === 5 ? "project-link-black" : "project-link-white"}>View Front-End ⟶</li>
        <li className={this.props.currentPage === 5 ? "project-link-black" : "project-link-white"}>View Back-End ⟶</li>
      </ul>
    )
  }

  projectInfo = () => {
    return(
      <div id="project-info-container">
        <p className={this.props.currentPage === 1 || this.props.currentPage === 5 ? "title-black" : "title-white"}>{this.props.info["title"]}</p>
        <p className={this.props.currentPage === 1 || this.props.currentPage === 5 ? "blurb-black" : "blurb-white"}>{this.props.info["blurb"]}</p>
      </div>
    )
  }

  render(){
    return(
      <div id={this.props.id} className="container-fluid section">
        <div className="col-12" id="page-container">
          <div className="row" id="page-buffer-top"></div>
          <div className="row" id="page-links-row">
            <div className="col-1"></div>
            <div className="col-2">
              {this.props.currentPage === 2 ? this.comingSoon() : null}
              {[3, 4, 5].includes(this.props.currentPage) ? this.projectLinks() : null}
            </div>
            <div className="col-9"></div>
          </div>
          <div className="row" id="page-buffer-bottom"></div>
          <div className="row" id="page-content">
            <div className="col-8"></div>
            <div className="col-4">{this.projectInfo()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page;
