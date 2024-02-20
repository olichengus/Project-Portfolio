import React from 'react';
import Arlo from '../assets/arloblue.png';
import ArloFamily from '../assets/arlofamily.jpeg';
import Maple from '../assets/maple.jpeg';
import Macaw from '../assets/macaw.jpeg';

const Experience = () => {
  return (
    <div id='exp' className='bkgroundpage'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-left w-full h-full'>
            <div className='mt-10'>
                <p className='text-4xl text-left text-gray-300 font-bold inline border-b-4 border-pink-600'>Work Experience</p>
            </div>
            <div className='mt-9 max-w-[1000px] w-full flex flex-col grid md:grid-cols-2 gap-4'>
                <div className='sm:text-right text-4xl font-bol grid md:grid-cols-2 gap-1 items-center'>
                    <div className='flex'>
                        <img className="flex-1 object-cover m-1" src={Arlo}/>
                    </div>
                    <div className='flex'>
                        <img className="flex-1 object-cover m-1" src={ArloFamily}/>
                    </div>
                    <div className='flex'>
                        <img className="flex-1 object-cover m-1" src={Maple}/>
                    </div>
                    <div className='flex'>
                        <img className="flex-1 object-cover m-1" src={Macaw}/>
                    </div>
                </div>
                <div className=''>
                    <p className='text-left text-4xl text-gray-300'>Arlo Technologies</p>
                    <p className='text-left text-2xl font-bold text-gray-300'>Software Engineer in Test</p>
                    <p className='text-md mt-10 text-gray-300'>Involved in Python scripting to test Arlo Smart Home Security products as well as maintaining device firmware deployment pipeline. Worked closely alongside Firmware, Software, and Product teams to discuss and fix bugs for new products and releases. Contributed to the successful launch of the Arlo Security Hub and its surrounding ecosystem such as Sensors, Sirens and Keypad.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
