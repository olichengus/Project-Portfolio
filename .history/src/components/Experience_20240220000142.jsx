import React from 'react';

const Experience = () => {
  return (
    <div id='exp' className='bkgroundpage'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='mt-10'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Work Experience</p>
            </div>
            <div className='mt-9 max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Software Developer Intern</p>
                    <p>May 2021 - August 2021</p>
                </div>
                <div className=''>
                    <p>Worked at the University of British Columbia as a Software Developer Intern. My main responsibilities were to develop and maintain the UBC Elective Finder website. I also worked on the UBC Course Schedule API, which is used by the UBC Elective Finder to get course information. I used technologies such as React, TypeScript, and Node.js. I also worked with the UBC IT department to deploy the UBC Elective Finder website to UBC servers. I also worked with the UBC IT department to deploy the UBC Elective Finder website to UBC servers.</p>
                </div>
        </div>
    </div>
  );
};

export default Experience;
