import React, {useState} from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [copyEmail] = useState("oliverjcheng@gmail.com")
    const handleClick = () => setNav(!nav)
    const handleCopyEmail = () => {
      navigator.clipboard.writeText(copyEmail)
      .then(() => {
        alert('Email copied to clipboard!');
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
                <li className='text-2xl'>
                <Link to='home' smooth={true} duration={1000}>
                <button class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <span class="font-normal hover:font-bold">Home</span>
                </button>
                </Link>
                </li>
                <li className='text-2xl'>
                <Link to='about' smooth={true} duration={1000}>
                <a href="#" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <span class="font-normal hover:font-bold">About</span>
                </a>
                </Link>
                </li>
                <li className='text-2xl'>
                <Link to='exp' smooth={true} duration={1000}>
                <a href="#" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <span class="font-normal hover:font-bold">Experience</span>
                </a>
                </Link>
                </li>
                <li className='text-2xl'>
                <Link to='work' smooth={true} duration={1000}>
                <a href="#" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <span class="font-normal hover:font-bold">Projects</span>
                </a>
                </Link>
                </li>
                {/* <li className='text-2xl'>
                <a href="#" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <span class="font-normal hover:font-bold">Contact</span>
                </a>
                </li> */}

            
            </ul>
        </div>

        <div onClick={handleClick} className='md:hidden z-10'>
            {/* if false set it to bars else set it to x logo*/}
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Moble menu <a href="#" id="style-2" data-replace="this link"><span>this link</span></a></p>*/}
        <ul className={!nav ? "hidden": 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify center items-center'}>
                <li className='py-6 text-2xl'>
                  Home
                </li>
                <li className='py-6 text-2xl'>About</li>
                <li className='py-6 text-2xl'>Experience</li>
                <li className='py-6 text-2xl'>Projects</li>
                <li className='py-6 text-2xl'>Contact</li>
        </ul>

      {/* Social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a
              className='flex font-bold justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/oliverchng/'
              target="_blank"
              rel="norefferer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d1d1d]'>
            <a
              className='flex font-bold justify-between items-center w-full text-gray-300'
              href='https://github.com/olichengus'
              target="_blank"
              rel="noreferrer"
            >
              GitHub<FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#196b59]'>
            <button onClick={handleCopyEmail} className='flex justify-between font-bold items-center w-full text-gray-300'>
              Email<HiOutlineMail size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#424a54]'>
            <a
              className='flex font-bold justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/1rqXDRZy0LsIa-csbMTLzWvaeRUXEz6KGjNAEor1SMbY/edit?usp=sharing'
              target="_blank"
              rel="noreferrer"
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
