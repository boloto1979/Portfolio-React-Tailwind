import React from "react";
import C from "../assets/linguagens/c-plus-plus-2048.png";
import Javascript from "../assets/linguagens/JavaScript_logo_2.svg.png";
import Laravel from "../assets/linguagens/Laravel.svg.png";
import MySQL from "../assets/linguagens/MySQL.png";
import Docker from "../assets/linguagens/Moby-logo.png";
import PHP from "../assets/linguagens/PHP-logo.svg.png";
import Python from "../assets/linguagens/Python.svg.png";
import PostGre from "../assets/linguagens/Postgresql_elephant.svg.png";
import Typescript from "../assets/linguagens/Typescript_logo_2020.svg.png";
import Git from "../assets/linguagens/Git.png";
import Vue from "../assets/linguagens/Vue.js_Logo_2.svg.png";
import Tailwind from "../assets/linguagens/Tailwind.svg.png";
import Bash from "../assets/linguagens/Bash_Logo_Colored.svg.png";
import ReactUP from "../assets/linguagens/React-icon.svg.png";
import Github from "../assets/linguagens/github.png";
import Metasploit from "../assets/linguagens/metasploit-1.png";
import Hydra from "../assets/linguagens/hydra-logo.svg";
import Nmap from "../assets/linguagens/nmap-logo-256x256.png";
import Owasp from "../assets/linguagens/owasp_logo_flat2_icon.png";
import Wireshark from "../assets/linguagens/wireshark_104082.png";
import Burp from "../assets/linguagens/1_KMYIE0A-u-DhaMm9N2ImlA.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: PHP,
      title: "PHP",
      style: "shadow-blue-400",
    },
    {
      id: 2,
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
      id: 7,
      src: Python,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: Vue,
      title: "Vue.JS",
      style: "shadow-green-700",
    },
    {
      id: 9,
      src: C,
      title: "C/C++",
      style: "shadow-blue-300",
    },
    {
    id: 12,
    src: Tailwind,
    title: "Tailwind",
    style: "shadow-blue-500",
    },
    {
      id:13,
      src: Bash,
      title: "Bash",
      style:" shadow-white",
    },
    {
      id:14,
      src: ReactUP,
      title: "React",
      style:"shadow-blue-500",
    },
    {
      id: 3,
      src: MySQL,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: PostGre,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: Laravel,
      title: "Laravel",
      style: "shadow-red-700",
    },
    {
      id: 8,
      src: Docker,
      title: "Docker",
      style: "shadow-blue-800",
    },
    {
      id: 10,
      src: Git,
      title: "GIT",
      style: "shadow-orange-700",
    },
    {
      id: 14,
      src: Github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id:15,
      src:Metasploit,
      title:"Metasploit",
      style: "shadow-blue-600"
    },
    {
      id:16,
      src:Hydra,
      title:"Hydra",
      style: "shadow-green-300"
    },
    {
      id:17,
      src:Nmap,
      title:"Nmap",
      style: "shadow-blue-100"
    },
    {
      id:18,
      src:Owasp,
      title:"Owasp",
      style: "shadow-blue-900"
    },
    {
      id:19,
      src:Wireshark,
      title:"Wireshark",
      style: "shadow-blue-400"
    },
    {
      id:20,
      src:Burp,
      title:"Burp suite",
      style: "shadow-orange-500"
    },

  ];

  return (
    <div name="Experience" className="w-full h-full text-white bg-custom-blue">
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div>
          <p
            className="inline p-2 text-4xl font-bold border-b-4 border-gray-500 "
          >
            Experience
          </p>
          <p className="py-6 ">Languages and Tools:</p>
        </div>

        <div
          className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
