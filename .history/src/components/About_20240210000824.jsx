import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-r from-gray-900 via-blue-700 to-blue-400 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 justify-center items-center'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 hover:text-white'>About</p>
                    </div>
                    
                </div>
                <div className='mt-9 max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
