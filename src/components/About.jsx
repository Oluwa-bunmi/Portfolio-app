import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const About = () => {
  const [activeTab, setActiveTab] = useState("empty");
  return (
    <div
      id="about"
      className="py-4 px-4 lg:px-[11rem] text-center flex flex-col justify-center"
    >
      <h2>Get to know</h2>
      <h1 className="text-[var(--primary)] font-dancing py-6">About Me</h1>

      <div className="leading-loose">
        <p>I am Oluwabunmi, a frontend developer</p>
        <p className="mb-6">
          A vibrant developer who is always eager to learn new things and
          collaborate with people. I love applying responsive design principles
          and watching my web pages shrink into different screen sizes and still
          look good amazing.With several projects built, I am confident of my
          skill as a frontend developer.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="flex justify-center"
        >
          <button
            className="group p-3 my-2 flex items-center  rounded-md border-[var(--primary)]  hover:bg-[var(--primary)]"
            onClick={() => setActiveTab("contact")}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default About;
