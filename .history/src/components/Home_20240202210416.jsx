import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto h-full flex flex-col justify-center'>
        <p>Hi, my name is</p>
        <
        <button className='flex items-center justify-center bg-blue-500 text-gray-300 px-6 py-2 mt-4 hover:bg-blue-600 duration-300'>
          Get started <HiArrowNarrowRight size={25} className='ml-2' />
        </button>
      </div>
    </div>
  )
}

export default Home
