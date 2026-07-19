import { useState } from "react";
import "../styles/CTA.css";

function CTA() {
  const [showForm, setShowForm] = useState(false);

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

          {!showForm && (
            <div className="cta-buttons">
              <button
                className="cta-primary"
                onClick={() => setShowForm(true)}
              >
                Hire Talent
              </button>

              <a
                href="mailto:sales@hirinity.in?subject=Let's Talk About Hiring"
                className="cta-secondary"
              >
                Talk to Us
              </a>
            </div>
          )}

          {showForm && (
            <form
  className="hire-form"
  action="https://formsubmit.co/sales@hirinity.in"
  method="POST"
><input
  type="hidden"
  name="_subject"
  value="New Hiring Requirement - Hirinity"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />

              <input
                type="text"
                name="requirement"
                placeholder="What roles are you hiring for?"
                required
              />

              <textarea
                name="message"
                placeholder="Tell us more about your hiring requirements..."
                rows="5"
              />

              <button type="submit" className="cta-primary">
                Submit Requirement
              </button>

              <button
                type="button"
                className="close-form"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}

export default CTA;