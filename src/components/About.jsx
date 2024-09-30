import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const About = () => {
  const [activeTab, setActiveTab] = useState("empty");
  return (
    <>
      <div
        name="about"
        className="py-4 px-4 lg:px-[11rem] text-center flex flex-col justify-center"
      >
        <h2>Get to know</h2>
        <h1 className="text-[var(--primary)] font-dancing py-6">About Me</h1>

        <div className="leading-loose">
          <div>
            <p>I am Oluwabunmi, a frontend developer from Nigeria</p>
            <p className="mb-6">
              Always eager to learn new things and
              collaborate with people. I love applying responsive design
              principles and watching my web pages shrink into different screen
              sizes and still look good amazing.With several projects built, I
              am confident of my skill as a frontend developer.
            </p>
          </div>
          <Link to="projects" className="flex justify-center">
            <button className="group p-3 my-2 flex items-center rounded-md border-[var(--primary)]  hover:bg-[var(--primary)]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  
  );
};

export default About;
