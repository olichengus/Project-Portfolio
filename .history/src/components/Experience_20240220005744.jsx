import React from 'react';
import Arlo from '../assets/arloblue.png';

const Experience = () => {
  return (
    <div id='exp' className='bkgroundpage'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='mt-10'>
                <p className='text-4xl text-left text-gray-300 font-bold inline border-b-4 border-pink-600'>Work Experience</p>
            </div>
            <div className='mt-9 max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <img className="mx-auto w-3/4" src={Arlo}/>
                    <p className='text-center text-4xl text-gray-300'>Arlo Technologies</p>
                </div>
                <div className=''>
                    <p className='text-left text-4xl text-gray-300'>Software Engineer in Test</p>
                    <p className='text-md text-gray-300 font-bold'>Involved in Python scripting to test Arlo Smart Home Security products as well as maintaining device firmware deployment pipeline. Worked closely alongside Firmware, Software, and Product teams to discuss and fix bugs for new products and releases. Contributed to the successful launch of the Arlo Security Hub and its surrounding ecosystem such as Sensors, Sirens and Keypad.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
