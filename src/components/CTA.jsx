import "../styles/CTA.css";

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">

        <div className="cta-content">
          <span className="cta-tag">Let's Build Together</span>

          <h2>
            Ready to Build Your
            <span> Next Great Team?</span>
          </h2>

          <p>
            Tell us what you are hiring for and let Hirinity help you connect
            with the right talent faster.
          </p>

          <div className="cta-buttons">
            <a href="mailto:info@hirinity.com?subject=Hiring Requirement" className="cta-primary">
  Hire Talent
</a>
            <a
  href="mailto:info@hirinity.com?subject=Let's Talk About Hiring"
  className="cta-secondary"
>
  Talk to Us
</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;