import React from "react";
import EzoFuck from "../assets/ezfuck.png";
import Chatbot from "../assets/chatbot.jpeg";
import Blog from "../assets/laravel.png";
import Keylogger from "../assets/keylogger.jpg";
import Malware from "../assets/malware.png";
import Sentinel from "../assets/stark-sentinel.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: EzoFuck,
      link:'https://github.com/boloto1979/EZofuck'
    },
    {
      id: 2,
      src: Chatbot,
      link:'https://github.com/boloto1979/Chatbot-AI'
    },
    {
      id: 3,
      src: Blog,
      link:'https://github.com/boloto1979/Blog-Laravel'

    },
    {
      id: 4,
      src: Keylogger,
      link:'https://github.com/boloto1979/Keylogger'

    },
    {
      id: 5,
      src: Malware,
      link:'https://github.com/boloto1979/Malware-Cripto'

    },
    {
      id: 6,
      src: Sentinel,
      link:'https://github.com/boloto1979/Code-Sentinel'

    },
  ];

  return (
    <div name="Portfolio" className="w-full h-full text-white bg-custom-blue">
      <div
        className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto "
      >
        <div className="pb-8">
          <p
            className="inline text-4xl font-bold border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div
          className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0"
        >
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="h-48 duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <a href={link}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 View
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <br/>
      </div>
    </div>
  );
};

export default Portfolio;
