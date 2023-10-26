import React from "react";
import Phishing from "../assets/6b38023a-b3de-4c64-9919-d79a5a2fb34a.jpeg";
import Malware from "../assets/malware.png";
import Sentinel from "../assets/stark-sentinel.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Sentinel,
      link:'https://github.com/boloto1979/Code-Sentinel'

    },
    {
      id: 2,
      src: Malware,
      link:'https://github.com/boloto1979/Basic-Types-of-Malware'

    },
    {
      id: 3,
      src: Phishing,
      link:'https://github.com/boloto1979/.phishing'

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
            Projects
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
