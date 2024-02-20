import React from 'react';
import Python from '../assets/python.png';
import Typescript from '../assets/Typescript.png';
import C from '../assets/cplus.png';
import Java from '../assets/java.png';
import Linux from '../assets/linux.png';
const Skills = () => {
    return (
        <div name="skills" className='bkgroundpage'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Skills</p>
                </div>

            <div className='w-90 grid grid-cols-4 sm:grid-cols4 gap-4 text-center py-9'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src={Python} alt="html" />
                    <p className='my-4 text-gray-300'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto mt-5" src={Typescript}/>
                    <p className='my-4 text-gray-300 mt-19'>TypeScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src={Java}/>
                    <p className='my-4 text-gray-300 text-l'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src={C}/>
                    <p className='my-4 text-gray-300 text-bold'>C/C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true" alt="html" />
                    <p className='my-4 text-gray-300'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                    <p className='my-4 text-gray-300'>Linux</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Skills;
