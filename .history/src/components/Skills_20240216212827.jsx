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
                    <img className="w-20 mx-auto" src="data:image/png;base64,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" alt="html" />
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
