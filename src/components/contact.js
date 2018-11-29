import React from "react";
import { StaticQuery, graphql } from "gatsby";  

var contactStyle = {
  backgroundImage: `url("/img/map-image.png")`
}

const Contact = () => (
  <StaticQuery
    query={graphql`
        query {
          contentfulSignUp {
            title
            p1 {
              childMarkdownRemark {
                html
              }
            }
            confirmValues {
              childMarkdownRemark {
                html
              }
            }
            contactUs {
              childMarkdownRemark {
                html
              }
            }
          }
        }
    `}
    render={data => (
      <section id="contact" style={contactStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{data.contentfulSignUp.title}</h2>
              <div className="text-primary"
                   dangerouslySetInnerHTML={{ __html: data.contentfulSignUp.p1.childMarkdownRemark.html}}>
              </div>
              <div className="text-primary" 
                   dangerouslySetInnerHTML={{__html: data.contentfulSignUp.contactUs.childMarkdownRemark.html}}>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default Contact;