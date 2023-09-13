import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/BookShelfProject.png";
import ImgCodepen from "../../assets/codepen-clone.jpg";
import ImgBitWallet from "../../assets/bit-wallet.png";
import ImgShoppingCart from "../../assets/shopping-cart.png";
import ImgResposiveUI from "../../assets/responsiveUI.jpg";
import Imgcarousel from "../../assets/carousel.png";

const projects = [
  {
    id: 1,
    image: Img1,
    title: "BookShelf",
    desc: "It is my Entri Full Stack Development Internship project. It’s able to add,update and delete Books in this website.",
    github: "https://github.com/aspak0/Book-Shelf_MERN-app",
    demo: "https://cummerbund-agouti.cyclic.app/",
  },
  {
    id: 2,
    image: ImgCodepen,
    title: "Codepen-clone",
    desc: "This is my Relevel by Unacademy Internship project using React and Code Mirror.",
    github: "https://github.com/aspak0/React-projects/tree/main/codepen-clone",
    demo: "https://cummerbund-agouti.cyclic.app/",
  },
  {
    id: 3,
    image: ImgBitWallet,
    title: "Bit Wallet",
    desc: "Developed a Bit Wallet project utilizing HTML, CSS, and Bootstrap.",
    github: "https://github.com/aspak0/Bit_wallet.github.io",
    demo: "https://aspak0.github.io/Bit_wallet.github.io/",
  },
  {
    id: 4,
    image: ImgShoppingCart,
    title: "Shopping cart",
    desc: "Implemented a modern and visually appealing user interface with a transparent design using JavaScript.",
    github: "https://github.com/aspak0/React-projects/tree/main/shoppingcart",
    demo: "https://unique-sundae-2bfee0.netlify.app/index.html",
  },
  {
    id: 5,
    image: ImgResposiveUI,
    title: "Responsive UI",
    desc: "Designed and developed a responsive user interface using React.",
    github:
      "https://github.com/aspak0/React-projects/tree/main/techiz-responsive-ui",
    demo: "https://responsiveui-mauve.vercel.app/",
  },
  {
    id: 6,
    image: Imgcarousel,
    title: "ShadeShift Carousel",
    desc: "Created a React website with both dark and light modes, and it includes a carousel component.",
    github: "https://github.com/aspak0/React-projects/tree/main/coding-hub",
    demo: "https://coding-hub-beta.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Project</h2>

        <div className="container portfolio-container">
          {projects.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="item-image">
                  <img src={image} alt={title} />
                  <div className="item-details">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
