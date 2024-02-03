import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#3b4ddb] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 justify-center items-center'>
                    <div className='text-left'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 hover:text-white'>Interesting Facts About Me</p>
                    </div>
                    
                </div>
                <div className='mt-9 max-w-[1000px] w-full'>
                    <ul class="list-disc pl-4">
                        <li class="mb-2 text-3xl font-bold hover:text-white"></li>
                        <li class="mb-2 text-3xl font-bold hover:text-white">I am fluent in French and Mandarin.</li>
                        <li class="mb-2 text-3xl font-bold hover:text-white">I am a massive Manchester United and NBA Fan!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
