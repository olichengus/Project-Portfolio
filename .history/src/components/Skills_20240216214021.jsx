import React from 'react';
import Python from '../assets/python.png';
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
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="/assets/python.png"/>
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true" alt="html" />
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
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300'>React</p>
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
