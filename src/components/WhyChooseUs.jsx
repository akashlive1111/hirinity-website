import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why" id="about">
      <div className="why-container">

        <div className="why-heading">
          <span className="why-tag">Why Hirinity</span>

          <h2>
            Built for Faster,
            <span> Smarter Hiring.</span>
          </h2>

          <p>
            We combine recruitment expertise, quality screening and a
            global talent network to help companies hire with confidence.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <span className="why-number">01</span>
            <h3>Fast Turnaround</h3>
            <p>
              Get carefully screened candidate profiles without waiting
              weeks for the right talent.
            </p>
          </div>

          <div className="why-card">
            <span className="why-number">02</span>
            <h3>Quality Screening</h3>
            <p>
              Every candidate is evaluated for experience, skills and
              suitability before reaching your team.
            </p>
          </div>

          <div className="why-card">
            <span className="why-number">03</span>
            <h3>Dedicated Recruiters</h3>
            <p>
              Work with recruitment professionals who understand your
              requirements and hiring goals.
            </p>
          </div>

          <div className="why-card">
            <span className="why-number">04</span>
            <h3>Global Talent Network</h3>
            <p>
              Access professionals across multiple industries and markets
              through our growing talent network.
            </p>
          </div>

        </div>

        <div className="why-stats">
          <div>
            <strong>5000+</strong>
            <span>Candidate Connections</span>
          </div>

          <div>
            <strong>48 Hrs</strong>
            <span>Fast Shortlisting</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Target Satisfaction</span>
          </div>

          <div>
            <strong>Global</strong>
            <span>Talent Reach</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;