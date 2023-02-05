import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ekfcegk",
      "template_rzynd8w",
      form.current,
      "C7SY7Q3Ed8eOQ4Efv"
    );
    e.target.reset();
  };
  return (
    <div id="contact">
      <div className="text-center ">
        <h2 className="pt-10 ">Get in Touch</h2>
        <h1 className="text-[var(--primary)] font-dancing mt-4">Contact Me</h1>
      </div>
      <div className=" px-6 sm:px-14 py-12 lg:grid lg:grid-cols-[30%_58%] gap-[2rem] lg:gap-[12%]">
        <div className="flex flex-col order-2 lg:order-1">
          <div className="flex items-center gap-4 leading-[5]">
            <AiOutlineGithub className="text-[2.5rem]" />

            <a href="https://github.com/Oluwa-bunmi" target="_blank">
              Github
            </a>
          </div>

          <div className="flex items-center gap-4 leading-[5]">
            <BsLinkedin className="text-[1.8rem]" />

            <a
              href="https://www.linkedin.com/in/oluwabunmi-gbemisoye/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4 leading-[5]">
            <BsWhatsapp className="text-[1.8rem]" />

            <a
              href="https://api.whatsapp.com/send?phone=+2347040573717"
              target="_blank"
            >
              Whatsapp
            </a>
          </div>

          <div className="flex items-center gap-4 leading-[5]">
            <MdOutlineEmail className="text-[2rem]" />

            <a href="mailto:gbemisoyeadejumoke@gmail.com" target="_blank">
              Drop a mail
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 order-1 pt-8 lg:pt-0 lg:order-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="inputs"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="inputs"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="inputs"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
