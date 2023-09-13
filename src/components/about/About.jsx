import React from "react";
import "./about.css";
import AbouMe from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about-container">
          <div className="about-me">
            <div className="about-image">
              <img src={AbouMe} alt="about-img" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className="about-icon" />
                <h5>Experience</h5>
                <small>2+ Years Freelance</small>
              </article>

              <article className="about-card">
                <BiSolidBookReader className="about-icon" />
                <h5>Courses</h5>
                <small>7+ Online Courses</small>
              </article>

              <article className="about-card">
                <VscFolderLibrary className="about-icon" />
                <h5>Projects</h5>
                <small>10+ Projects</small>
              </article>
            </div>

            <p>
              👋 Hey there! I'm Aspak, a passionate full stack developer with a
              flair for Frontend magic. With a dedicated passion for the past 2
              years, I've skilled the art of turning lines of code into
              captivating user experiences. From pixel-perfect designs to
              seamless interactive features, I've honed my skills in JavaScript,
              React, and Node to create digital wonders. Let's turn our ideas
              into reality!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
