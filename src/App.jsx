import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import Courses from "./components/courses/Courses";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={5}
        outerSize={30}
        color="4, 233, 185"
        outerAlpha={0}
        innerScale={0.7}
        outerScale={1.5}
        showSystemCursor
        outerStyle={{
          border: "1px solid #04dfb9",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      {/* <div className="cursor-out"></div> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
