import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-full text-white bg-custom-blue">
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div className="pb-8 ">
          <p
            className="inline text-4xl font-bold border-b-4 border-gray-500 "
          >
            About
          </p>
        </div>

        <p className="mt-2 text-xl ">
          I started studying programming at the age of 15, when I got my first
          computer with the Linux operating system. Back then, I was completely
          new to Linux and didn't know how to use it. However, over time, I
          improved my skills and acquired ever-increasing knowledge in this
          area. Besides programming, I'm also interested in hacking. My
          curiosity led me to explore other Linux systems such as Ubuntu,
          Debian, the renowned Kali Linux, Mint, Manjaro, Zorin, Slackware,
          among others. Each of these systems has unique characteristics and
          features, which has allowed me to further expand my knowledge and
          understanding of the Linux world.
        </p>

        <br />

        <p className="text-xl ">
          I am currently attending college and continue to dedicate myself
          intensely to cybersecurity studies. I recognize the importance of
          keeping up to date with trends and advances in this ever-evolving
          field. Every day, I dedicate time and effort to improve my learning,
          whether through courses, practical projects or research. My commitment
          is to expand my knowledge and skills, aiming to become a qualified
          professional capable of facing the complex challenges of
          cybersecurity.
        </p>
      </div>
    </div>
  );
};

export default About;
