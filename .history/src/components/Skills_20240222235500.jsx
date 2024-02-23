import React from 'react';
import Python from '../assets/python.png';
import Typescript from '../assets/Typescript.png';
import C from '../assets/cplus.png';
import Java from '../assets/java.png';
import SQL from '../assets/sql2.png';
const Skills = () => {
    return (
        <div className='bkgroundpage'>
            <div className='w-full h-screen max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                <div name="skills">
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Skills</p>
                </div>

            <div className='w-90 grid grid-cols-4 sm:grid-cols-2 gap-4 text-center py-9'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto" src={Python} alt="html" />
                    <p className='my-4 text-gray-300 text-2xlsm:text-sm'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto mt-5" src={Typescript} alt=''/>
                    <p className='my-4 text-gray-300 mt-19 text-2xlsm:text-sm'>TypeScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300 text-2xlsm:text-sm'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto" src={Java} alt=''/>
                    <p className='my-4 text-gray-300 md:text-2xl sm:text-sm'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300 md:text-2xl sm:text-sm'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto" src={C} alt=''/>
                    <p className='my-4 text-gray-300 md:text-2xl sm:text-sm'>C/C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300 md:text-2xl sm:text-sm'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 bg-[#24498a]'>
                    <img className="w-20 mx-auto w-110" src={SQL} alt=''/>
                    <p className='my-4 text-gray-300 text-2xlsm:text-sm'>SQL</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Skills;
