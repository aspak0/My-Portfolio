import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <>
      <div className="header-socials">
        <a href="https://www.linkedin.com/in/aspak-279142227" target="_blank">
          <BsLinkedin />
        </a>

        <a href="https://github.com/aspak0" target="_blank">
          <BsGithub />
        </a>

        <a href="https://dribbble.com/aspak0313" target="_blank">
          <FiDribbble />
        </a>
      </div>
    </>
  );
};

export default HeaderSocial;
