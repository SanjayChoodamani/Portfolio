import React from 'react'

const About = () => {
    return (
        <div className='p-5 md:flex gap-4 my-10 ' id='about'>
            <div className='mx-3 w-11/12 md:w-3/5'>
                <p className=' text-3xl md:text-4xl md:w-5/6 font-extralight font-dm leading-relaxed px-2'>With <span className='font-semibold'>A YEAR of WEB DEVELOPMENT</span> experience, I've <span className='font-semibold'>BUILT</span>  diverse applications, showcasing expertise in <span className='font-semibold'>TECHNICAL</span> innovation and <span className='font-semibold'>IMPACTFUL</span> solutions.</p>
            </div>
            <div className='md:w-2/5'>
                <img src="https://jumpstory.com/wp-content/uploads/2022/09/jumpstory-download20220921-095931-scaled-e1663758181204.jpg" alt="about image" 
                className='my-3 p-3 md:p-0 md:my-0'
                />
            </div>
        </div>
    )
}

export default About
