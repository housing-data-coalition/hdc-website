import React from "react";
import { StaticQuery, graphql } from "gatsby";  

import Bio from '../components/bio';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import DataHelpdesk from "./data-helpdesk";

const App = () => 
 <StaticQuery
    query={graphql`
        query {
          allContentfulTitleBanner {
            edges {
              node {
                title
                headerImage {
                  fluid {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
    `}
    render={data => (
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
                  <a className="nav-link js-scroll-trigger" href="#helpdesk">Data Help Desk</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Get In Touch</a>
                </li>
              </ul>
          </div>
        </nav>

        <header className="masthead" style={{backgroundImage: 'url(' + data.allContentfulTitleBanner.edges[0].node.headerImage.fluid.src + ')'}}>
          <div className="container text-center">
            <div className="intro-text">
              <div className="intro-heading">Housing Data Coalition</div>
              <br/>
              <div className="btn btn-warning btn-lg">
                <a class="black" href="#helpdesk">
                  <strong>NEW:</strong> Send us a data request
                </a>
              </div>
            </div>
          </div>
        </header>

        <Bio />

        <Gallery />
        <DataHelpdesk />
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
    </div>)}
  />


export default App;