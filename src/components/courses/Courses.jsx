import React from "react";
import "./courses.css";
import Relevel from "../../assets/Relevel.jpg";
import FreeCodeCamp from "../../assets/freecodecamp.jpg";
import Eduonix from "../../assets/eduonix.png";
import LearnTube from "../../assets/LearnTube.jpg";
import GreatLearning from "../../assets/GreatLearning.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    image: Relevel,
    name: "Front End Devolopment",
    details:
      "I am proud to present this certificate, which recognizes my successful completion of the 'Front End Development' course offered by Relevel by Unacademy. I honed my skills as a front-end developer, gaining proficiency  JavaScript, React and various modern web development technologies.",
    link: "https://drive.google.com/file/d/1FUvGKW_lJNiObzXKH4dTEC211eLbqr83/view",
  },
  {
    image: FreeCodeCamp,
    name: "Responsive Web Design",
    details:
      "This certificate attests to my successful completion of the freeCodeCamp 'Responsive Web Design' course. This achievement reflects my dedication to mastering the foundations of web design. Throughout this course, I acquired essential skills in HTML, CSS, and responsive design techniques.",
    link: "https://drive.google.com/file/d/1bDzEaIB99yu3O34e5K6CIjkdkTgYxMn2/view",
  },
  {
    image: Eduonix,
    name: "Become a Certified Web Developer From Scratch",
    details:
      "I am thrilled to present this certificate, which certifies my successful completion of the 'Become a Certified Web Developer From Scratch' course offered by Eduonix Learning Solutions.",
    link: "https://drive.google.com/file/d/12Xt7IrBHo8SOn6BeVAyLJZu4AH1EY_BN/view",
  },

  {
    image: LearnTube,
    name: "Advanced JavaScript",
    details:
      "I am delighted to present this certificate, which acknowledges my successful completion of the 'Advanced JavaScript' course offered by CareerNinja | LearnTube. I learned advanced concepts and I delved deep into the world of JavaScript Throughout this program.",
    link: "https://drive.google.com/file/d/1hpERI4UfJjnnM3J28qpefsXLjnU4e8Ws/view",
  },
  {
    image: GreatLearning,
    name: "Introduction to Ethical Hacking",
    details:
      "I'm pleased to present this certificate, which recognizes my successful completion of the 'Introduction to Ethical Hacking' course by Great Learning. This course has provided me with a solid foundation in the principles of ethical hacking and cybersecurity.",
    link: "https://drive.google.com/file/d/1-yr1TgG-m2z3bJcG2zXXwonJu-IYuv_s/view",
  },
];

const Courses = () => {
  return (
    <>
      <section id="courses">
        <h5>Here are my</h5>
        <h2>Course & Certificates</h2>

        <Swiper
          className="container course-container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ image, name, details, link }, index) => {
            return (
              <SwiperSlide key={index} className="course">
                <div className="topics-image">
                  <img src={image} alt={name} />
                </div>
                <div>
                  <h5 className="course-name">{name}</h5>
                  <small className="course-details">{details}</small>
                  <a href={link} className="btn" target="_blank">
                    View Certificate
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Courses;
