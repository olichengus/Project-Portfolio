import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#3b4ddb]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi, my name is</p>
        <h1 className='text-white text-7xl font-bold'>Oliver Cheng</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'> I am a Computer Science student @ UBC</h2>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'> Welcome to my Portfolio!</h2>
        <div className='background-color'>
          <button className = 'text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> 
          My Projects 
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-2' /></button>
          </span>
          </span>
          </button>
        
        </div>
      </div>

    </div>
  )
}

export default Home
