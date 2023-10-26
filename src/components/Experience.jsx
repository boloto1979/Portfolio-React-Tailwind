import React from "react";
import C from "../assets/linguagens/c-plus-plus-2048.png";
import Javascript from "../assets/linguagens/JavaScript_logo_2.svg.png";
import Laravel from "../assets/linguagens/Laravel.svg.png";
import MySQL from "../assets/linguagens/MySQL.png";
import Docker from "../assets/linguagens/Moby-logo.png";
import PHP from "../assets/linguagens/PHP-logo.svg.png";
import Python from "../assets/linguagens/Python.svg.png";
import PostGre from "../assets/linguagens/Postgresql_elephant.svg.png";
import Git from "../assets/linguagens/Git.png";
import Vue from "../assets/linguagens/Vue.js_Logo_2.svg.png";
import Tailwind from "../assets/linguagens/Tailwind.svg.png";
import Bash from "../assets/linguagens/Bash_Logo_Colored.svg.png";
import Github from "../assets/linguagens/github.png";
import Metasploit from "../assets/linguagens/metasploit-1.png";
import Hydra from "../assets/linguagens/hydra-logo.svg";
import Nmap from "../assets/linguagens/nmap-logo-256x256.png";
import Owasp from "../assets/linguagens/owasp_logo_flat2_icon.png";
import Wireshark from "../assets/linguagens/wireshark_104082.png";
import Ghidra from "../assets/linguagens/Ghidra_logo.svg.png";
import AWS from "../assets/linguagens/download.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: PHP,
      title: "PHP",
      style: "shadow-white",
    },
    {
      id: 2,
      src: Javascript,
      title: "Javascript",
      style: "shadow-white",
    },
    {
      id: 3,
      src: Python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 4,
      src: Vue,
      title: "Vue.JS",
      style: "shadow-white",
    },
    {
      id: 5,
      src: C,
      title: "C/C++",
      style: "shadow-white",
    },
    {
    id: 6,
    src: Tailwind,
    title: "Tailwind",
    style: "shadow-white",
    },
    {
      id:7,
      src: Bash,
      title: "Bash",
      style:" shadow-white",
    },
    {
      id: 8,
      src: MySQL,
      title: "MySQL",
      style: "shadow-white",
    },
    {
      id: 9,
      src: PostGre,
      title: "PostgreSQL",
      style: "shadow-white",
    },
    {
      id: 10,
      src: Laravel,
      title: "Laravel",
      style: "shadow-white",
    },
    {
      id: 11,
      src: Docker,
      title: "Docker",
      style: "shadow-white",
    },
    {
      id: 12,
      src: Git,
      title: "GIT",
      style: "shadow-white",
    },
    {
      id: 13,
      src: Github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id:14,
      src:Metasploit,
      title:"Metasploit",
      style: "shadow-white"
    },
    {
      id:15,
      src:Hydra,
      title:"Hydra",
      style: "shadow-white"
    },
    {
      id:16,
      src:Nmap,
      title:"Nmap",
      style: "shadow-white"
    },
    {
      id:17,
      src:Owasp,
      title:"OwaspZap",
      style: "shadow-white"
    },
    {
      id:18,
      src:Wireshark,
      title:"Wireshark",
      style: "shadow-white"
    },
    {
      id:19,
      src:Ghidra,
      title:"Ghidra",
      style: "shadow-white"
    },
    {
      id:20,
      src:AWS,
      title:"AWS",
      style: "shadow-white"
    },

  ];

  return (
    <div name="Experience" className="w-full h-full text-white bg-custom-blue">
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div className="flex items-center justify-center">
          <p
            className="inline p-2 text-4xl font-bold border-b-4 border-gray-500 "
          >
            Languages and Tools
          </p>
        </div>

        <div
          className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-5 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div key={id}
              className={` shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto " />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
