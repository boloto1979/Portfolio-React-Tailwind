import React from "react";
import C from "../assets/linguagens/C.svg.png";
import Javascript from "../assets/linguagens/JavaScript_logo_2.svg.png";
import Laravel from "../assets/linguagens/Laravel.svg.png";
import MySQL from "../assets/linguagens/MySQL.png";
import Next from "../assets/linguagens/nextjs-logo.png";
import PHP from "../assets/linguagens/PHP-logo.svg.png";
import Python from "../assets/linguagens/Python.svg.png";
import ReactLo from "../assets/linguagens/React-icon.svg.png";
import Typescript from "../assets/linguagens/Typescript_logo_2020.svg.png";
import Git from "../assets/linguagens/Git.png";
import Github from "../assets/linguagens/github.png";
import Tailwind from "../assets/linguagens/Tailwind.svg.png"


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: PHP,
      title: "PHP",
      style: "shadow-blue-700",
    },
    {
      id: 2,
      src: Laravel,
      title: "Laravel",
      style: "shadow-red-700",
    },
    {
      id: 3,
      src: MySQL,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: Typescript,
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: ReactLo,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: Python,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: Next,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: C,
      title: "C",
      style: "shadow-blue-300",
    },
    {
      id: 10,
      src: Git,
      title: "GIT",
      style: "shadow-orange-700",
    },
    {
      id: 11,
      src: Github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 12,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div name="Experience" className=" w-full h-full text-white bg-custom-blue">
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div>
          <p
            className=" text-4xl font-bold border-b-4
                 border-gray-500 p-2 inline"
          >
            Experience
          </p>
          <p className=" py-6">Languages and Tools:</p>
        </div>

        <div
          className=" w-full grid grid-cols-2 sm:grid-cols-3
             gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className=" w-20 mx-auto" />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
