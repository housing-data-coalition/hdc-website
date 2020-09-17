import React from "react";

const DATA_REQUEST_URL = "https://airtable.com/shr6iSJw4Wtlj8Mci";

const DataHelpdesk = () => (
  <section
    id="helpdesk"
    style={{
      backgroundColor: "#323232",
    }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="section-heading text-primary">Data Help Desk</h2>
          <br />
          <p className="section-subheading text-primary">
            Send us your housing data inquiries and we will ask our community of
            data investigators to look into things! We made this platform for
            everyone fighting displacement in NYC. We want to make sure that
            access to housing data can be reached by folks working in the tenant
            movement who otherwise don't have the time or resources to get it.
          </p>
          <br />
          <p className="section-subheading text-primary">
            Although we try and serve all the requests we get (that fit our
            mission) we give priority to BIPOC-led groups working within the
            tenant movement. Read more about our mission below.
          </p>
          <br />
          <a href={DATA_REQUEST_URL} target="_blank" rel="noopener noreferrer">
            <div className="btn btn-large btn-primary">Send a request</div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default DataHelpdesk;
