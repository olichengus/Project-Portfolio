import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#3b4ddb]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi, my name is</p>
        <h1 className='text-white text-7xl font-bold'>Oliver Cheng</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'> I'm a Computer Science Student @ UBC</h2>
        <p> I'm a student that has an interested in Full-stack Development, Firmware Engineering and Test Automation.</p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink'
        </div>
      </div>

    </div>
  )
}

export default Home
