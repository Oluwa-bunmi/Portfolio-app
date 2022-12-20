import {AiOutlineHtml5} from "react-icons/ai"
import { DiCss3Full } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";



const Skills = () => {
  return (
    <>
      <hr />
      <div className="text-center  bg-black">
        <h2 className="pt-10 text-white">What Skills I Have</h2>
        <h1 className="text-[var(--primary)] font-dancing mt-4">
          My Experience
        </h1>
      </div>
      <div className="text-white bg-black py-12 px-6 sm:px-14  grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
        <p className="flex items-end">
          <AiOutlineHtml5 className="text-5xl text-[coral] " />
          <span>HTML5</span>
        </p>
        <p className="flex items-end">
          <DiCss3Full className="text-5xl text-[#00c0dc]" />
          <span>CSS3</span>
        </p>
        <p className="flex items-end">
          <DiSass className="text-5xl text-[#cd6799] " />
          <span>SASS</span>
        </p>
        <p className="flex items-end">
          <IoLogoJavascript className="text-5xl text-[#f0db4f] " />
          <span>JavaScript</span>
        </p>
        <p className="flex items-end gap-2">
          <BsBootstrapFill className="text-5xl text-[#4c0bce] " />
          <span>Bootstrap</span>
        </p>
        <p className="flex items-end">
          <FaReact className="text-5xl text-[#61dbfb] " />
          <span>REACT JS</span>
        </p>
        <p className="flex items-end">
          <AiOutlineGithub className="text-5xl  " />
          <span>GIT & GITHUB</span>
        </p>
      </div>
      <hr />
    </>
  );
};

export default Skills;
