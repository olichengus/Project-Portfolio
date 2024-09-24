import React from 'react';
import Arlo from '../assets/arloblue.png';
import ArloFamily from '../assets/arlofamily.jpeg';
import Maple from '../assets/maple.jpeg';
import Macaw from '../assets/macaw.jpeg';
import Airswift from '../assets/dappworks/airswift.png';
import Dappworks from '../assets/dappworks/Dappworks_Square.jpg';
import Team from '../assets/dappworks/team.JPG';
import Chilling from '../assets/dappworks/chilling.jpg';
const DAPPWORKS_TEXT =  "I was the main front-end developer, before transitioning to a full-stack developer for the AirSwift.io project: a payment gateway system that allows merchants to handle cryptocurrency payments. For the front-end I built the user interface using React and NextJS. I would regularly perform refactorings and component extractions to enhance development efficiency and seamless developer onboarding for new team members. For the back-end I worked with SpringBoot and Java to build robust RESTful APIs that would handle the business logic. I also worked on the database schema and queries to ensure that the data was stored and retrieved correctly. Our team used JIRA and Confluence to manage our tasks and facilitate Agile development. We would have daily stand-ups to discuss our progress, and to promote collaboration"

const Experience = () => {
  return (
    <div id='exp' className='bkgroundpage'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-left w-full h-full'>
                <div className='w-full h-screen max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                <div className='mt-26'>
                    <p className='text-4xl text-left text-gray-300 font-bold inline border-b-4 border-pink-600'>Work Experience</p>
                </div>
                <div className='mt-9 max-w-[1000px] w-full flex-col grid md:grid-cols-2 gap-4'>
                    <div className='sm:text-right grid md:grid-cols-2 gap-1 items-center'>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-150'>
                            <img className="flex w-full h-full object-fill" src={Airswift} alt=''/>
                        </div>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-150'>
                            <img className=" flex w-full h-full object-fill" src={Dappworks} alt=''/>
                        </div>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-100'>
                            <img className="flex w-full h-full object-cover" src={Team} alt=''/>
                        </div>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-100'>
                            <img className="flex w-full h-full object-cover" src={Chilling} alt=''/>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-left text-4xl text-gray-300'>Dappworks Technology Inc.</p>
                        <p className='text-left text-2xl font-bold text-gray-300'>Full-Stack Developer</p>
                        <p className='text-left text-lg font-bold text-gray-300'> May, 2024 - Present </p>
                        <p className='text-md mt-4 text-gray-300 w-full h-full object-cover'>{DAPPWORKS_TEXT}.</p>
                    </div>
                </div>
                {/* ARLO */}
                <div className='mt-20 max-w-[1000px] w-full flex-col grid md:grid-cols-2 gap-4'>
                    <div className='sm:text-right grid md:grid-cols-2 gap-1 items-center'>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-150'>
                            <img className="flex-1 object-cover" src={Arlo} alt=''/>
                        </div>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-150'>
                            <img className="flex w-full h-full object-cover" src={ArloFamily} alt=''/>
                        </div>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-150'>
                            <img className="flex w-full h-full object-cover" src={Maple} alt=''/>
                        </div>
                        <div className='group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto h-150'>
                            <img className="flex-1 object-cover" src={Macaw} alt=''/>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-left text-4xl text-gray-300'>Arlo Technologies</p>
                        <p className='text-left text-2xl font-bold text-gray-300'>Software Engineer in Test</p>
                        <p className='text-left text-lg font-bold text-gray-300'> August, 2022 - September, 2023 </p>
                        <p className='text-md mt-4 text-gray-300 w-full h-full object-cover'>Involved in Python scripting to test Arlo Smart Home Security products as well as maintaining device firmware deployment pipeline. Worked closely alongside Firmware, Software, and Product teams to discuss and fix bugs for new products and releases. Contributed to the successful launch of the Arlo Security Hub and its surrounding ecosystem such as Sensors, Sirens and Keypad.</p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  );
};

export default Experience;
