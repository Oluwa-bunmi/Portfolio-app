import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/lopage.ico";

const Navbar = ({ toggle }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="nav flex justify-between items-center h-20 px-6 sm:px-14 z-10 w-full fixed top-0">
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center font-dancing text-3xl md:text-4xl font-bold cursor-pointer"
        >
          <img src={logo} alt="logo" />
          <p>dev</p>
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex cursor-pointer">
        <BiSun onClick={toggle} />
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
            ? "absolute left-0 top-0  w-full h-screen px-4 py-7 bg-[var(--background)] flex flex-col justify-center items-center "
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="text-[22px]">
            <Link to="home" smooth={true} duration={500} onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="text-[22px]">
            <Link to="about" smooth={true} duration={500} onClick={handleNav}>
              About
            </Link>
          </li>
          <li className="text-[22px]">
            <Link to="skills" smooth={true} duration={500} onClick={handleNav}>
              Skills
            </Link>
          </li>
          <li className="text-[22px]">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Projects
            </Link>
          </li>
          <li className="text-[22px]">
            <Link to="contact" smooth={true} duration={500} onClick={handleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
