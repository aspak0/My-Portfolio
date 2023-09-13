import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zcrvi17",
      "template_mywhzot",
      form.current,
      "rbc8rRN0GllLUdpz9"
    );
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>aspakiqbal@gmail.com</h5>
              <a href="mailto:aspakiqbal@gmail.com" target="_blank">
                Email Me
              </a>
            </article>
            <article className="contact-option">
              <AiOutlineLinkedin className="contact-option-icon" />
              <h4>Connect</h4>
              <h5>aspak - Linkedin</h5>
              <a
                href="https://www.linkedin.com/in/aspak-279142227/"
                target="_blank"
              >
                Connect with Me
              </a>
            </article>
            <article className="contact-option">
              <BsWhatsapp className="contact-option-icon" />
              <h4>WhatsApp</h4>
              <h5>+91 8310008662</h5>
              <a href="https://wa.me/+918310008662" target="_blank">
                Say Hello
              </a>
            </article>
          </div>
          {/* End of Contact Option */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
