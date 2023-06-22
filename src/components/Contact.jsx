import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className=" w-full h-full text-white bg-custom-blue">
      <div className=" flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div className=" pb-8">
          <p className=" inline text-4xl font-bold border-b-4 border-gray-500 "
          >Contact</p>
        </div>

        <div className=" flex justify-center items-center"> 
          <form action="https://getform.io/f/bcdb05f0-c733-4b4a-92f4-466d4e86386c" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              className=" my-2 p-2 bg-transparent border-2 rounded-md
                      text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your email"
              className=" my-2  p-2 bg-transparent border-2 rounded-md
                      text-white focus:outline-none"
            />
            <textarea name="message" 
            rows="10" 
            placeholder="Enter your message"
            className=" p-2 bg-transparent border-2 rounded-md
             text-white focus:outline-none"></textarea>

             <button className=" text-white bg-cyan-600 px-6 py-3
              my-8 mx-auto flex items-center rounded-md hover:scale-110
               duration-300">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
