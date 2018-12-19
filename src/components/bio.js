import React from "react";

import { StaticQuery, graphql } from "gatsby";

const Bio = () => (
  <StaticQuery
    query={graphql`
        query {
          contentfulAboutUs {
            title
            p1{
              childMarkdownRemark {
                html
              }
            }
        }}
    `}
    render={data => (
      <section id="bio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">{data.contentfulAboutUs.title}</h2>
                <h3 className="section-subheading text-muted">
                  <br/>
                  <div>
                    <p align="left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      <span dangerouslySetInnerHTML={{ __html: data.contentfulAboutUs.p1.childMarkdownRemark.html}} />
                    </p>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </section>
    )}
  />
);

export default Bio;

