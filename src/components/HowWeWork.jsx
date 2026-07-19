import "../styles/HowWeWork.css";

function HowWeWork() {
  return (
    <section className="how-we-work">

      <div className="how-container">

        <div className="how-heading">
          <span className="how-tag">How We Work</span>

          <h2>
            A Simple Process.
            <span> Better Hiring.</span>
          </h2>

          <p>
            From requirement to joining, Hirinity keeps the hiring process
            simple, transparent and focused on finding the right talent.
          </p>
        </div>

        <div className="how-grid">

          <div className="how-card">
            <span className="how-number">01</span>
            <h3>Share Your Requirement</h3>
            <p>
              Tell us about the role, skills, experience and type of candidate
              you are looking for.
            </p>
          </div>

          <div className="how-card">
            <span className="how-number">02</span>
            <h3>We Source & Screen</h3>
            <p>
              Our recruitment team identifies relevant candidates and screens
              them before sharing profiles with you.
            </p>
          </div>

          <div className="how-card">
            <span className="how-number">03</span>
            <h3>You Interview</h3>
            <p>
              Meet the shortlisted candidates and evaluate the people who best
              fit your team and requirements.
            </p>
          </div>

          <div className="how-card">
            <span className="how-number">04</span>
            <h3>Hire & Grow</h3>
            <p>
              Select your preferred candidate while Hirinity supports a smooth
              hiring and joining process.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HowWeWork;