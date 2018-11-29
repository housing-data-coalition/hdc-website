import React from "react";

import { StaticQuery, graphql } from "gatsby";

const Bio = () => (
  <StaticQuery
    query={graphql`
        query {
          contentfulAboutUs {
            title
            p1 {
              p1
            } 
            p2 {
              p2
            }
        }}
    `}
    render={({
      contentfulAboutUs: {
        title,
        p1: { p1 },
        p2: { p2 }
      }
    }) => (
      <section id="bio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">{title}</h2>
                <h3 className="section-subheading text-muted">
                  <br/>
                  <div>
                    <p align="left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {p1}
                      </p>
                    <p align="left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {p2}
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

