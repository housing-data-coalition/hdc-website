import React from "react";
import $ from 'jquery'; 

import { StaticQuery, graphql } from "gatsby";                    

class GalleryItem extends React.Component {
  render() { 
    return (<div className="col-md-4 col-sm-6 portfolio-item" onClick={this.props.handleClick}>
                <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal" + this.props.number}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={this.props.thumbURL} alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>{this.props.title}</h4>
                  <p className="text-muted">{this.props.org}</p>
                </div>
              </div>);
    }
}


class GalleryModal extends React.Component {

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  render() {
    return(<div className={"portfolio-modal modal fade "+((this.props.isOpen == this.props.number) ? "show" : "")} 
                tabIndex="-1" 
                role="dialog" 
                aria-hidden="true" 
                id={"#portfolioModal" + this.props.number}
                style={{ display: ((this.props.isOpen == this.props.number) ? "block" : "none")}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" onClick={this.props.closeButton}>
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2>{this.props.title}</h2>
                        <p className="item-intro text-muted">{this.props.org}</p>
                        <a href={this.props.link} target="_blank">
                        <img className="img-fluid d-block mx-auto" src={this.props.imageURL} alt=""/> </a>
                        <p align="left">{this.props.p1}</p>
                        <a href={this.props.link} target="_blank" className="tool-link">
                          <button className="btn btn-primary">Go to {this.props.title}</button>
                        </a>
                        <button className="btn btn-primary" type="button" onClick={this.props.closeButton}>
                          <i className="fa fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>);
        }
}

class GalleryFull extends React.Component {

  constructor (props) {
    super(props);

   this.state = {
      showModal: -1
    };
  }
 
  openModal(number) {
    this.setState({showModal: number} );
    $('body').addClass('modal-open');
    console.log("opened modal", number);
  }

  closeModal() {
    this.setState({showModal: -1} );
    $('body').removeClass('modal-open');
    console.log("closed modal");
  }

  createGallery = () => {
    
    let galleryItems = [];
    for (let i = 0; i < this.props.galleryContent.length; i++) {
        galleryItems.push(<GalleryItem key={i} 
                                       number={i} 
                                       title={this.props.galleryContent[i].title}
                                       org={this.props.galleryContent[i].org}
                                       thumbURL={this.props.galleryContent[i].image.fluid.src}
                                       handleClick={()=>{this.openModal(i)}} />)
    }
    return galleryItems;
  }

  createModals() {
    
    let modals = [];
    for (let i = 0; i < this.props.galleryContent.length; i++) {
        modals.push(<GalleryModal key={i} 
                                  number={i} 
                                  isOpen={this.state.showModal} 
                                  title={this.props.galleryContent[i].title}
                                  org={this.props.galleryContent[i].org}
                                  link={this.props.galleryContent[i].link}
                                  imageURL={this.props.galleryContent[i].image.fluid.src}
                                  p1={this.props.galleryContent[i].p1.p1}
                                  contact={this.props.galleryContent[i].contact}
                                  closeButton={()=>{this.closeModal()}} />)
    }
    return modals;
  }

  render() {


        return (<div>
                  <section className="bg-light" id="portfolio">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <h2 className="section-heading">{this.props.title}</h2>
                          <h3 className="section-subheading text-muted">{this.props.subtitle}</h3>
                          <br/>
                        </div>
                      </div>
                      <div className="row"> 
                        {this.createGallery()}
                      </div>
                    </div>
                  </section>
                  {this.createModals()}
         </div>
        );
      }
}

const Gallery = () => (
  <StaticQuery
    query={graphql`
        query {
          allContentfulResourceGallery {
            edges {
              node {
                title 
                subtitle {subtitle}
                galleryContent {
                  title
                  org 
                  image {
                    fluid {
                      aspectRatio
                      src
                      srcSet
                      sizes
                    } 
                  }
                  p1 {p1}
                  link 
                  tags {
                    name
                  }
                  contact
                }
              }
            }
          }
        }
    `}
    render={data => (
      <GalleryFull 
      title = {data.allContentfulResourceGallery.edges[0].node.title} 
      subtitle = {data.allContentfulResourceGallery.edges[0].node.subtitle.subtitle}
      galleryContent = {data.allContentfulResourceGallery.edges[0].node.galleryContent}
      /> 
    )}
  />
);

export default Gallery;



