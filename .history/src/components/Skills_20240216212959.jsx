import React from 'react';

const Skills = () => {
    return (
        <div name="skills" className='bkgroundpage'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Skills</p>
                </div>

            <div className='w-90 grid grid-cols-4 sm:grid-cols4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="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" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300 text-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Skills;
