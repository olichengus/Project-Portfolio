import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#3b4ddb]'>
      {/* Container */}
      <div className='container mx-auto h-full flex flex-col justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl text-gray-300'>Hello, I'm <span className='text-black'>Oliver Cheng</span></h1>
          <p className='text-gray-300'>I'm a Computer Science at UBC with a passion for full-stack development, firmware engineering, and automated testing.</p>
          <button className='bg-blue-600 px-4 py-2 mt-4 text-gray-300 flex justify-center items-center'>
            View my work <HiArrowNarrowRight />
          </button>
        </div>
        </div>

    </div>
  )
}

export default Home
