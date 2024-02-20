import React from 'react';

const Skills = () => {
    return (
        <div name="skills" className='bkgroundpage'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <p className='text-4xl text-gray-300 font-bold inline border py-4'>Skills</p>
                <p>These are some technologies I know</p>
            </div>
            <div>
                <div>
                    <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
