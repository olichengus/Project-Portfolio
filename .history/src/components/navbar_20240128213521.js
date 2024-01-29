import React from 'react'
import {
    FaBars,
    FaTimes
  } from 'react-icons/fa';

const navbar = () => {
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

        <div className='md:hidden'>
            <FaBars />
        </div>


        {/* Moble menu */}
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] f'>
                <li className='py-6'>Home</li>
                <li className='py-6'>About</li>
                <li className='py-6'>Experience</li>
                <li className='py-6'>Projects</li>
                <li className='py-6'>Contact</li>

        </ul>
        <div className='hidden'>
        </div>
    </div>
    

  )
}

export default navbar
