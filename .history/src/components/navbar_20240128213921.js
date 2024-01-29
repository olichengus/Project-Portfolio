import React, {useState} from 'react'
import {
    FaBars,
    FaTimes
  } from 'react-icons/fa';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
    {/* menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>

            
            </ul>
        </div>

        <div className='md:hidden z-10'>
            <FaBars />
        </div>


        {/* Moble menu */}
        <ul className={!nav ? }>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>

        </ul>
        <div className='hidden'>
        </div>
    </div>
    

  )
}

export default Navbar
