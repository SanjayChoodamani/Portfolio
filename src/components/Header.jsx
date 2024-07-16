import React from 'react'

const Header = () => {
    return (
        <nav className='flex justify-between p-4 font-dm font-black text-xl'>
            <div>
                <h1>SANJAY B S</h1>
            </div>
            <div >
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
