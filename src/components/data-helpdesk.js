import { graphql, StaticQuery } from "gatsby";
import React from "react";

const DataHelpdesk = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulDataHelpDesk {
          title
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          buttonLink
          buttonTitle
        }
      }
    `}
    render={(data) => (
      <section
        id="helpdesk"
        style={{
          backgroundColor: "#323232",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-heading text-primary">
                {data.contentfulDataHelpDesk.title}
              </h2>
              <br />
              <p className="section-subheading text-primary">
              {data.contentfulDataHelpDesk.paragraph1.paragraph1}
              </p>
              <br />
              <p className="section-subheading text-primary">
              {data.contentfulDataHelpDesk.paragraph2.paragraph2}
              </p>
              <br />
              <a
                href={data.contentfulDataHelpDesk.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn btn-lg btn-warning font-weight-bold text-white">
                  {data.contentfulDataHelpDesk.buttonTitle}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default DataHelpdesk;
