import React from "react";
import "./services.css";
import { FaPaintbrush, FaLaptopCode } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services-container">
          <article className="service">
            <div className="service-head">
              <div className="service-list-icon icon1">
                <FaPaintbrush />
              </div>
              <h3>Design Focused</h3>
            </div>

            <ul className="service-list">
              <li>
                <p>
                  <br />I have a passion for crafting visually appealing
                  websites. Recognizing the significance of excellent design
                  alongside strong development, I love working collaboratively,
                  especially in teams that bring together design and development
                  expertise.
                  <br />
                </p>
              </li>
            </ul>
          </article>

          {/* End  */}
          <article className="service">
            <div className="service-head">
              <div className="service-list-icon icon2">
                <BsStack />
              </div>
              <h3>Full-Stack Development</h3>
            </div>

            <ul className="service-list">
              <li>
                <p>
                  <br />
                  I love being a full stack developer. I understand the
                  importance of both back-end and front-end development. I'm
                  skilled in technologies like Node.js, React, and databases
                  such as MongoDB.
                  <br />
                  In the world of full stack development, I aim to create smooth
                  digital experiences.
                  <br />
                </p>
              </li>
            </ul>
          </article>
          {/* End Web Design */}
          <article className="service">
            <div className="service-head">
              <div className="service-list-icon icon3">
                <FaLaptopCode />
              </div>
              <h3>Others</h3>
            </div>

            <ul className="service-list">
              <li>
                <p>
                  <br />
                  I enjoy working with operating systems. I understand their
                  role as the backbone of computer functionality. I'm skilled in
                  various operating systems, including Windows, macOS, and
                  Linux. <br />I look for problems and ways to fix them, so
                  everything stays protected and working fine.
                  <br />
                </p>
              </li>
            </ul>
          </article>
          {/* End */}
        </div>
      </section>
    </>
  );
};

export default Services;
