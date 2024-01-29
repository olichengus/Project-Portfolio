import React, {useState} from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
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

        <div onClick={handleClick} className='md:hidden z-10'>
            {/* if false set it to bars else set it to x logo*/}
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Moble menu */}
        <ul className={!nav ? "hidden": 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>

        </ul>
        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-300px] hover:ml-[-10px] bg-blue-600' 
              href='https://www.linkedin.com/in/oliverchng/'>
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-300px] hover:ml-[-10px] bg-purple-600' 
              href='https://www.linkedin.com/in/oliverchng/'>
                <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-300px] hover:ml-[-10px] bg-blue-600' 
              href='https://www.linkedin.com/in/oliverchng/'>
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-300px] hover:ml-[-10px] bg-blue-600' 
              href='https://www.linkedin.com/in/oliverchng/'>
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
    </div>
    

  )
}

export default Navbar
