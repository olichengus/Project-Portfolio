import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify'>
        <p>Hi, my name is</p>
        <h1>Oliver Cheng</h1>
        <h2>I am a Computer Science Student</h2>
        <p>I am a CS student interested in full-stack development, firmware engineering and automated testing.</p>
      </div>
    </div>
  )
}

export default Home
