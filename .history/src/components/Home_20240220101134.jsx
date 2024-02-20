import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useState,useEffect } from 'react';
import {Link} from 'react-scroll';

const Home = () => {
  const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prevText => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);
  
    return displayText;
  };
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-r bkgroundpage'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-1000 text-2xl'>Hi, my name is</p>
        <h1 className='text-white text-7xl font-bold'>Oliver Cheng</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#27292f]'> I am a Computer Science student @ UBC</h2>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#27292f]'> Welcome to my Portfolio!</h2>
        <div className='background-color'>
          <button className = 'text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={1000}>
            My Projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>

            </Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
