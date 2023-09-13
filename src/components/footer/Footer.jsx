import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer-logo">
          Aspak
        </a>

        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/aspak-279142227/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/aspak0" target="_blank">
            <BsGithub />
          </a>
          <a href="https://twitter.com/Aspak001" target="_blank">
            <BsTwitter />
          </a>
        </div>

        <div className="footer-copyright">
          <small>&copy; 2023. All Rights Reserved. </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
