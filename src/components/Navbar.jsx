import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 bg-gray absolute z-10 w-full bg-[var(--neutral)] ">
      <div>
        <h1 className="text-[var(--primary)] font-dancing">Jummy.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="hidden md:flex cursor-pointer">
        <BiSun />
      </div>

      <div className="z-10 md:hidden" onClick={handleNav}>
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
            ? "absolute left-0 top-0  w-full px-4 py-7 bg-[var(--neutral)] flex flex-col  "
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1 className="text-[var(--primary)] font-dancing">Jummy.</h1>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <BiSun />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
