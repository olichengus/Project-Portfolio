import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#3b4ddb] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 justify-center items-center'>
                    <div className='text-left'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Interesting Facts About Me</p>
                    </div>
                    
                </div>
                <div className='mt-9 max-w-[1000px] w-full'>
                    <ul>
                        <li className='text-2xl'>I am currently a 3rd Year Student</li>
                        <li className='text-2xl'>I am a Software Developer</li>
                        <li className='text-2xl'>I am a Web Developer</li>
                        <li className='text-2xl'>I am a Mobile Developer</li>
                        <li className='text-2xl'>I am a Full Stack Developer</li>
                        <li className='text-2xl'>I am a Game Developer</li>
                        <li className='text-2xl'>I am a Machine Learning Developer</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
