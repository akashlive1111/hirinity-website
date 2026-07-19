import "../styles/Industries.css";
function Industries() {
  return (
    <section className="industries" id="services">

      <h2>Industries We Serve</h2>

      <div className="industry-grid">

        <div className="industry-card">
          <div className="icon">💻</div>
          <h3>Information Technology</h3>
          <p>Software, Web, AI, Cloud & IT Services</p>
        </div>

        <div className="industry-card">
          <div className="icon">💰</div>
          <h3>Finance</h3>
          <p>Banking, Accounting & Financial Services</p>
        </div>

        <div className="industry-card">
          <div className="icon">🏥</div>
          <h3>Healthcare</h3>
          <p>Hospitals, Pharma & Medical Staffing</p>
        </div>

        <div className="industry-card">
          <div className="icon">📞</div>
          <h3>BPO & Customer Support</h3>
          <p>Voice, Non-Voice & Customer Success</p>
        </div>

        <div className="industry-card">
          <div className="icon">🏭</div>
          <h3>Manufacturing</h3>
          <p>Production, Operations & Supply Chain</p>
        </div>

        <div className="industry-card">
          <div className="icon">📈</div>
          <h3>Sales & Marketing</h3>
          <p>Business Development & Digital Marketing</p>
        </div>

      </div>

    </section>
  );
}

export default Industries;