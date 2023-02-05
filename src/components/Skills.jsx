import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills">
      <hr />
      <div className="text-center  ">
        <h2 className="pt-10 ">What Skills I Have</h2>
        <h1 className="text-[var(--primary)] font-dancing mt-4">
          My Experience
        </h1>
      </div>
      <div className="py-12 px-6 sm:px-14  grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
        <p className="flex items-end hover:scale-110 duration-500">
          <AiOutlineHtml5 className="text-5xl text-[coral] " />
          <span>HTML5</span>
        </p>
        <p className="flex items-end hover:scale-110 duration-500">
          <DiCss3Full className="text-5xl text-[#00c0dc]" />
          <span>CSS3</span>
        </p>
        <p className="flex items-end hover:scale-110 duration-500">
          <DiSass className="text-5xl text-[#cd6799] " />
          <span>SASS</span>
        </p>
        <p className="flex items-end hover:scale-110 duration-500 ">
          <IoLogoJavascript className="text-5xl text-[#f0db4f] " />
          <span>JavaScript</span>
        </p>
        <p className="flex items-end gap-2 hover:scale-110 duration-500">
          <BsBootstrapFill className="text-5xl text-[#4c0bce] " />
          <span>Bootstrap</span>
        </p>
        <p className="flex items-end hover:scale-110 duration-500">
          <FaReact className="text-5xl text-[#61dbfb] " />
          <span>REACT JS</span>
        </p>
        <p className="flex items-end hover:scale-110 duration-500">
          <AiOutlineGithub className="text-5xl  " />
          <span>GIT & GITHUB</span>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Skills;
