import React from "react";

import Bio from '../components/bio';
import Gallery from '../components/gallery';
import Contact from '../components/contact';

import "../styles/bootstrap.css";

import "../styles/agency.css";


var landingStyle = {
  backgroundImage: `url("/img/header-bg.jpg")`
};

export default () => 
<div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#bio">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Resource Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Get In Touch</a>
            </li>
          </ul>
      </div>
    </nav>

    <header className="masthead" style={landingStyle}>
      <div className="container">
        <div className="intro-text">
          <div className="intro-heading">Housing Data Coalition</div>
        </div>
      </div>
    </header>

    <Bio />
    <Gallery />
    <Contact />

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright"></span>
          </div>
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                Adapted from <a href="https://startbootstrap.com/template-overviews/agency/" target="_blank">Agency Theme</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
</div>
