import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#3b4ddb]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-white text-7xl font-bold'>John Doe</h1>
        <h2 className='text-4xl sm:text-7xl'></h2>
      </div>

    </div>
  )
}

export default Home
