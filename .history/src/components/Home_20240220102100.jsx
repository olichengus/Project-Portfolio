import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useState,useEffect } from 'react';
import {Link} from 'react-scroll';
import TypeWriter from './TypeWriter.jsx';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-r bkgroundpage'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-1000 text-2xl'>Hi, my name is</p>
        <h1 className='text-white text-7xl font-bold'>Oliver Cheng</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#27292f]'>
      {displayText}
    </h2>
        <TypeWriter text="Welcome to my Portfolio!"/>
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
