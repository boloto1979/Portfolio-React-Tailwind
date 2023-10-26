import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail  } from "react-icons/ai";
import {SiTryhackme} from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full h-20 px-4 text-white bg-custom-blue first-letter:fixed">
      <div className="flex space-x-3 text-4xl">
        <a className="md:flex" href="https://www.linkedin.com/in/pedro-lima3233/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a className="md:flex" href="https://github.com/boloto1979" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a className="md:flex" href="https://criarmeulink.com.br/u/1675193138" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail />
        </a>
        <a className="md:flex" href="https://tryhackme.com/p/pedro.lima1979" target="_blank" rel="noopener noreferrer">
          <SiTryhackme />
        </a>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-medium text-gray-200 capitalize duration-200 cursor-pointer hover:scale-105"
          >
              <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 text-gray-200 cursor-pointer pe-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-200 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 py-6 text-4xl capitalize cursor-pointer">
              <Link onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
              >{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
