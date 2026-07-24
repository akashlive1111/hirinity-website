import "../Navbar.css";
import logo from "../assets/hirinity-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <img src={logo} alt="Hirinity Logo" />
      </a>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;