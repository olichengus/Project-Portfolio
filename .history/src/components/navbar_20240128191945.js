import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'> 
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>

            
            </ul>
        </div>
    </div>

  )
}

export default navbar
