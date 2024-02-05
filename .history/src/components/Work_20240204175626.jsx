import React from 'react';
import Background from '../assets/background.jpeg';

const Work = () => {
    return (
        <div className='w-full md:h-screen text-gray-300 bg-[#3b4ddb]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>My Projects</p>
                </div>

                <div style={backgroundImage: 'url($)'} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href ="/">
                                    <button></button>
                                </a>
                                <a href = "/">
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Work;
