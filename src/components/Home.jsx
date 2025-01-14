import React from 'react';  
import { HiArrowNarrowRight } from 'react-icons/hi';  
import { Link } from 'react-scroll';   
import './Home.css'; // Assuming you have a Home.css file for these styles  

const Home = () => {  
  return (  
    <div name="home" className='home-section w-full h-screen flex items-center'>  
      {/* Container */}  
      <div className='container max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>  
      <div className='flex flex-col items-center justify-center min-h-screen text-center'>  
      <h3 className='intro text-xl align-middle text-highlight'>Hello, my name is</h3>  
      <h1 className='name text-5xl sm:text-7xl font-bold'>Oliver Cheng</h1>  
      <h2 className='role text-3xl sm:text-5xl font-bold text-gray-300'>I am a Computer Science student @ UBC.</h2>  
      <div className='mt-5'>  
        <Link to='work' smooth={true} duration={1000} className='btn-projects text-white border-2 px-6 py-3 flex items-center'>  
          My Projects  
          <span className='ml-2'>  
            <HiArrowNarrowRight className='arrow-icon' />  
          </span>  
        </Link>  
      </div>  
    </div>  
      </div>  
    </div>  
  )  
}  

export default Home;
