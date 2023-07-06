import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../Scss/footer.css";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        AICHA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; AICHA AKROUT. All rights are reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
