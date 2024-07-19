import React from 'react'
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap, FaReact, FaFigma   } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress, SiMongodb  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


const Hero = () => {
    return (
        <div className='p-7 text-center flex flex-col md:justify-center h-5/6 md:h-dvh' id='hero'>
            <p className='font-headFont text-3xl my-5'>Hi! I am Sanjay</p>
            <h1 className='font-headFont text-7xl md:text-9xl  my-2 font-medium'>Creative and Skilled Web Developer</h1>
            <div className='flex gap-5 text-10xl md:text-5xl my-10 justify-center opacity-75 '>
                <FaHtml5 />
                <FaCss3 />
                <TbBrandJavascript />
                <FaBootstrap/>
                <RiTailwindCssFill/>
                <FaReact/>
                <FaNode/>
                <SiExpress/>
                <SiMongodb/>
                <FaFigma/>
            </div>
        </div>
    )
}

export default Hero
