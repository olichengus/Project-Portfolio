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
    const [copyEmail, setCopyEmail] = useState("oliverjcheng@gmail.com")
    const handleClick = () => setNav(!nav)
    const handleCopyEmail = () => {
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
    };
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'> 
    {/* menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li className='font-bold text-1xl hover:text-red-500'>Home</li>
                <li className='font-bold text-1xl hover:text-green-300'>About</li>
                <li className='font-bold text-1xl hover:text-purple-400'>Experience</li>
                <li className='font-bold text-1xl hover:text-blue-400'>Projects</li>
                <li className='font-bold text-1xl hover:text-orange-400'>Contact</li>

            
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

      {/* Social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex font-bold justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/oliverchng/'
              target="_blank"
              rel="norefferer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/olichengus'
              target="_blank"
              rel="noreferrer"
            >
              GitHub<FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <button onClick={handleCopyEmail} className='flex justify-between items-center w-full text-gray-300'>
              Email<HiOutlineMail size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
             Resume<BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
    

  )
}

export default Navbar
