import React, { useState } from "react";
import "./nav.css";
import {
  BiHomeCircle,
  BiUser,
  BiBook,
  BiMessageSquareDetail,
  BiFile,
} from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <BiHomeCircle />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <BiUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <BiFile />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
