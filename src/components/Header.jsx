import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <nav className='flex justify-between p-4 font-dm font-black text-xl'>
            <div>
                <h1>SANJAY B S</h1>
            </div>
            <div className='menu'>
                <ul className='md:flex gap-5'>
                    <li><Link to="#hero" smooth>Home</Link></li>
                    <li><Link to="#about" smooth>About</Link></li>
                    <li><Link to="#projects" smooth>Projects</Link></li>
                    <li><Link to="#contact" smooth>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
