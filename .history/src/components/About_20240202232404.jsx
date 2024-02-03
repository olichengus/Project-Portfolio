import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#3b4ddb] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 justify-center items-center'>
                    <div className=''>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Interesting Facts About Me</p>
                    </div>
                    
                </div>
                <div className='max-w-[1000px] w-full'>
                    <p> I am a 3rd year Computer Science student at UBC with an interest in Full-Stack Development, Firmware Engineering, and Test Automation. </p>
                </div>
            </div>
        </div>
    )
}

export default About;
