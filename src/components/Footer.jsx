import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>HIRINITY</h2>

            <p>
              Helping businesses hire better talent faster through focused,
              reliable and modern recruitment solutions.
            </p>

            <a href="mailto:sales@hirinity.in">
              sales@hirinity.in
            </a>
          </div>

         <div className="footer-links">
  <h3>Quick Links</h3>

  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>

          <div className="footer-links">
            <h3>Services</h3>

            <span>Permanent Hiring</span>
            <span>Contract Staffing</span>
            <span>Executive Search</span>
            <span>Talent Sourcing</span>
          </div>

          <div className="footer-links">
            <h3>Industries</h3>

            <span>Technology</span>
            <span>Finance</span>
            <span>Healthcare</span>
            <span>Sales & Marketing</span>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Hirinity. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;