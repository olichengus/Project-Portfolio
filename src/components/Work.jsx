import React from 'react';
import Telomeres from '../assets/telomeres.png';
import Insight from '../assets/Insight.png';
import WishList from '../assets/wishlist.png';
import Roads from '../assets/roads.png';
import NBA from '../assets/nba.png';
import Bolt from '../assets/bolt.jpeg';

const Work = () => {
    return (
        <div name = "work" className='w-full md:h-screen text-gray-300 bkgroundpage'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mt-26'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>My Projects</p>
                </div>

            {/* Container */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-7'>


            {/* Grid Item */}
                <div style = {{backgroundImage: `url(${NBA})`}}
                    className='shadow-lg shadow-[#040c16] group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                NBA Poeltl Draft Game
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href ="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href = "https://github.com/olichengus/nba-draft-poeltl-webapp">
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                            </div>
                        </div>
                </div>

                {/* Grid Item */}
                <div style = {{backgroundImage: `url(${Bolt})`}}
                    className='shadow-lg shadow-[#040c16] group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 items-center justify-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                UBC Bolt Case Comp
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href ="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href = "https://github.com/olichengus/bolt_datacomp">
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style = {{backgroundImage: `url(${Insight})`}}
                    className='shadow-lg shadow-[#040c16] group container object-cover w-full h-full rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                UBC Elective Finder
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href ="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href = "https://github.com/olichengus/UBC-Elective-Finder">
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style = {{backgroundImage: `url(${Telomeres})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Telomeres Website
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href ="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href = "https://github.com/olichengus/TelomeresWebsite">
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style = {{backgroundImage: `url(${WishList})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Wishlist Application
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href ="https://github.com/olichengus/WishList">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href = "https://github.com/olichengus/WishList">
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style = {{backgroundImage: `url(${Roads})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                PythonRoads
                            </span>
                            <div className='pt-8 text-center'>
                                {/* <a href ="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a> */}
                                <a href = "https://github.com/olichengus/PythonRoads">
                                    <button className='text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                                </a>
                            </div>
                        </div>
                    </div>
            
                </div>



            </div>
        </div>
    );
};

export default Work;
