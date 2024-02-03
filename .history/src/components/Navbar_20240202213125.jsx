import React, {useState} from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa';
import {Resume} from '../assets/resume.jpeg'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
    const resume = require('../assets/resume-icon.png');
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (

    

  )
}

export default Navbar
