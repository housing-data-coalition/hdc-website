import React from "react";
import { StaticQuery, graphql } from "gatsby";  

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
            backgroundImage {
              fluid {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
          }
        }
    `}
    render={data => (
      <section id="contact" style={{backgroundImage: 'url(' + data.contentfulSignUp.backgroundImage.fluid.src + ')'}}>
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