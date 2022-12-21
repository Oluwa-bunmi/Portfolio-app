import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("empty");
  return (
    <div className="bg-black text-white px-4 lg:px-[11rem] py-16 text-center " id="about">
      <h2>Get to know</h2>
      <h1 className="text-[var(--primary)] font-dancing py-6">About Me</h1>
      {/* <div className="flex justify-between align-center gap-[10rem]"> */}
      {/* <div className="text-[var(--primary)] ">
          <span> &#60; </span>
          <span> Jummy </span>

          <span>/ &#62;</span>
        </div> */}
      <div className="leading-loose">
        <p>I am Oluwabunmi, a frontend developer</p>
        <p className="mb-6">
          A vibrant developer who is always eager to learn new things and
          collaborate with people. I love applying responsive design principles
          and watching my web pages shrink into different screen sizes and still
          look good amazing.With several projects built, I am confident of my
          skill as a frontend developer.
        </p>
        <a href="#contact">
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            Let's Talk
          </button>
        </a>
      </div>
   
    </div>
    // </div>
  );
};

export default About;
