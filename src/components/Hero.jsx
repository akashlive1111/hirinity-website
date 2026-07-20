import "../styles/Hero.css";

function Hero() {
  const goToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      alert("Contact section not found");
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            Trusted Recruitment Partner
          </span>

  <h1>
  Infinite Talent.
  <br />
  <span>Infinite Possibilities.</span>
</h1>

          <p>
            Hirinity helps growing businesses hire high-quality professionals
            across technology, finance, healthcare, sales, marketing and
            leadership roles.
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="primary-btn"
              onClick={goToContact}
            >
              Hire Talent
            </button>

           <a
  href="mailto:sales@hirinity.in?subject=Job Application - Hirinity"
  className="secondary-btn"
>
  Explore Jobs
</a>

          </div>

          <div className="hero-mini-stats">

            <div>
              <strong>5000+</strong>
              <span>Placements</span>
            </div>

            <div>
              <strong>48 Hrs</strong>
              <span>Fast Shortlisting</span>
            </div>

            <div>
              <strong>95%</strong>
              <span>Client Satisfaction</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="dashboard-card">

            <div className="dashboard-header">

              <div>
                <span className="small-label">Best Match</span>
                <h3>Senior React Developer</h3>
              </div>

              <div className="match-badge">
                96%
              </div>

            </div>

            <div className="candidate-profile">

              <div className="candidate-avatar">
                AS
              </div>

              <div>
                <h4>Alex Smith</h4>
                <p>6 Years Experience</p>
              </div>

            </div>

            <div className="skill-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>AWS</span>
            </div>

            <button
              type="button"
              className="profile-btn"
            >
              View Candidate
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;