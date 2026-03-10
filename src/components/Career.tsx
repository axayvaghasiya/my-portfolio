import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Shopify Developer</h4>
                <h5>Cirkle Studio Pvt Ltd</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Designed and deployed mobile-first, 
              high-availability web architectures, 
              consistently achieving 95+ Google PageSpeed scores 
              through advanced CSS inlining 
              and asset minification.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Shopify Developer</h4>
                <h5>Muonix (Muonix Technolabs)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Managed complex third-party API integrations 
              and middleware solutions, ensuring seamless interoperability 
              between client-facing web applications and legacy backend systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Shopify Engineer <br />(Solutions Architect)</h4>
                <h5>The Bonsai Group</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Led the technical deployment of 20+ enterprise-scale web applications for international clients, ensuring seamless integration with existing data ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
