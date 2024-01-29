import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
    {/* menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>

            
            </ul>
        </div>

        <div className='hidden'>
            <FaBars />
        </div>

        <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>

        </ul>
    </div>
    

  )
}

export default navbar
