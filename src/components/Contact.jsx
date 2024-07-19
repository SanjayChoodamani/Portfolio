import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='p-5' id='contact'>
            <h1 className='font-headFont text-4xl my-0'>Let's Talk</h1>
            <p className='font-dm text-2xl uppercase ' >about the impact you'd like to make.</p>
            <div className='flex justify-between'>
                <a href="mailto:sanjaychoodamani13@gmail.com"> 
                <div className='flex justify-center items-center gap-2 my-2'>
                <IoIosMail className='text-2xl' /> 
                <span>MAIL ME</span>
                </div></a>
                <div className='flex justify-center items-center gap-3 my-2 text-2xl'>
                    <a href="https://github.com/SanjayChoodamani"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sanjay-bs"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
