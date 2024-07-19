import React from 'react'

const Projects = () => {
    return (
        <div className='p-5 text-center' id='projects'>
            <h1 className='font-headFont text-8xl md:text-9xl mt-8 font-medium my-4'>Selected Projects</h1>
            <div className='p-3 md:p-5 grid md:grid-cols-2 gap-x-10 gap-y-10'>
                <div className='p-3 hover:drop-shadow-xl hover:scale-105 '>
                    <img src="images/enigma24.png" alt="enigma website"  className='rounded-md'/>
                    <p className='my-1 text-left font-headFont font-medium text-2xl'>Enigma'24 National Level Technical Fest</p>
                    <a href="https://enigma24.in" className='text-start block text-lg font-dm font-semibold underline underline-offset-4 '>Visit Here</a>
                </div>
                <div className='p-3 hover:drop-shadow-xl hover:scale-105 '>
                    <img src="images/marketing.png" alt="marketing website" className='rounded-md'/>
                    <p className='my-1 text-left font-headFont font-medium text-2xl'>Enigma'24 Marketing Website</p>
                    <a href="https://marketing.enigma24.in" className='text-start block text-lg font-dm font-semibold underline underline-offset-4 '>Visit Here</a>
                </div>
                <div className='p-3 hover:drop-shadow-xl hover:scale-105 '>
                    <img src="images/mtc.png" alt="mtc website" className='rounded-md'/>
                    <p className='my-1 text-left font-headFont font-medium text-2xl'>The Malnad Technical club</p>
                    <a href="https://malnadtechnicalclub.com" className='text-start block text-lg font-dm font-semibold underline underline-offset-4 '>Visit Here</a>
                </div>
                <div className='p-3 hover:drop-shadow-xl hover:scale-105 '>
                <img src="images/elective.png" alt="elective website" className='rounded-md'/>
                    <p className='my-1 text-left font-headFont font-medium text-2xl'>Elective Course Registration Portal</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
