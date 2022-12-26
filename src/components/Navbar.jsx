import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { HiOutlineMenuAlt4 } from "react-icons/hi";



const Navbar = ({toggle}) => {
  const [nav, setNav] = useState(false);
 
 

  

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 px-6 sm:px-14 z-10 w-full ">
      <div>
        <h1 className="text-[var(--primary)] font-dancing">Jummy.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hidden md:flex cursor-pointer">
       
        <BiSun className="" onClick={toggle} />
      </div>

      <div className="z-[5] pt-[0.6rem] md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={20} className="text-white" />
        ) : (
          <HiOutlineMenuAlt4 size={20} className="text-white" />
        )}
      </div>
      {/* Drop down on mobile */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0  w-full px-4 py-7 bg-[var(--background)] flex flex-col z-[3] "
            : "absolute left-[-100%] "
        }
      >
        <ul>
          <h1 className="text-[var(--primary)] font-dancing">Jummy.</h1>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <BiSun className="text-white" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
