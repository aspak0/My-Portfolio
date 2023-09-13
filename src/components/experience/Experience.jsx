import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience-container">
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>HTML/CSS</h4>
                  <small className="text-light">Proficiency</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Practiced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>Git /GitHub</h4>
                  <small className="text-light">Practiced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>npm</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience-backend">
            <h3>Backend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>Mongo DB</h4>
                  <small className="text-light">Proficiency</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>Express JS</h4>
                  <small className="text-light">Practiced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
