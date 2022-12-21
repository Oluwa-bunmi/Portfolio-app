import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const Contacts = () => {
  return (
    <>
      <div className="text-center  bg-black">
        <h2 className="pt-10 text-white">Get in Touch</h2>
        <h1 className="text-[var(--primary)] font-dancing mt-4">Contact Me</h1>
      </div>
      <div className="bg-black text-white px-6 sm:px-14 py-12 grid lg:grid-cols-[30%_58%] gap-[2rem] lg:gap-[12%]">
        <div className="flex flex-col ">
          <div className="flex items-center gap-4 leading-[5]">
            <MdOutlineEmail className="text-[2rem]" />

            <a href="mailto:gbemisoyeadejumoke@gmail.com" target="_blank">
              gbemisoyeadejumoke@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 leading-[5]">
            <BsWhatsapp className="text-[1.8rem]" />

            <a
              href="https://api.whatsapp.com/send?phone+2347040573717"
              target="_blank"
            >
              Send a message
            </a>
          </div>
          <div className="flex items-center gap-4 leading-[5]">
            <BsLinkedin className="text-[1.8rem]" />

            <a href="" target="_blank">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4 leading-[5]">
            <AiOutlineGithub className="text-[2.5rem]" />

            <a href="" target="_blank">
              Github
            </a>
          </div>
        </div>
        <form action="" className="flex flex-col gap-5">
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
    </>
  );
};

export default Contacts;
