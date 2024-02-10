import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-r from-gray-900 via-blue-700 to-blue-400 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    
                </div>
                <div className='mt-9 max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Oliver, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a driven student striving to grow and learn everyday - not only as a developer, but also as a person. My main technical interests are with Full-Stack Development, Firmware Engineering, and Test Automation. In my free time, I love to watch and play sports. My main teams I cheer for are Manchester United and the Toronto Raptors. Another fun fact is that I am fluent in French because I did French Immersion in high school. Have a nice day!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
