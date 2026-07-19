import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="testimonials-tag">Client Stories</span>

          <h2>
            Trusted by Teams.
            <span> Built for Results.</span>
          </h2>

          <p>
            Hirinity helps businesses simplify hiring, improve candidate quality
            and build stronger teams.
          </p>
        </div>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">
              Hirinity understood our requirements quickly and shared relevant
              candidates without wasting time. The process was smooth and
              professional.
            </p>

            <div className="testimonial-person">
              <div className="testimonial-avatar">AR</div>

              <div>
                <h4>Arjun Rao</h4>
                <span>Head of Operations</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">
              The quality of shortlisted profiles was impressive. We were able
              to move faster and close an important role much sooner than
              expected.
            </p>

            <div className="testimonial-person">
              <div className="testimonial-avatar">SK</div>

              <div>
                <h4>Sarah Khan</h4>
                <span>Talent Acquisition Manager</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">
              Clear communication, fast turnaround and strong candidate
              screening. Hirinity felt like an extension of our internal hiring
              team.
            </p>

            <div className="testimonial-person">
              <div className="testimonial-avatar">DM</div>

              <div>
                <h4>David Miller</h4>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;