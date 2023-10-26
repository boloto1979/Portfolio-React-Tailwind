import React from 'react';
import MyImg from "../assets/portfolio/my.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="Home"
    className='w-full h-screen bg-custom-blue'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl font-bold text-white sm:text-7xl'>I'm a Developer and Pentester</h2>
                <p className='max-w-md py-4 text-gray-200 '>
                I am passionate about learning new technologies and applying them in challenging and innovative projects.
                </p>

                <div>
                    <Link to='Contact' smooth duration={500} className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-cyan-600">
                        Contact
                        <span className='duration-300 group-hover:rotate-90'>
                        <MdOutlineKeyboardArrowRight size={25} 
                        className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={MyImg} alt="my profile" 
                className='w-2/3 mx-auto rounded-2xl md:w-full'/>
            </div>
        </div>
    </div>
  );
};

export default Home;