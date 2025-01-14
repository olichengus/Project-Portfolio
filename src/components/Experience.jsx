import React, { useState } from 'react';  
import Arlo from '../assets/arloblue.png';  
import Dappworks from '../assets/dappworks/Dappworks_Square.jpg';
import Arista from '../assets/arista.jpeg'
import './Experience.css'; // Assuming the styles are in this CSS file  
const DAPPWORKS_TEXT =  "I was the main front-end developer, before transitioning to a full-stack developer for the AirSwift.io project: a payment gateway system that allows merchants to handle cryptocurrency payments. For the front-end I built the user interface using React and NextJS. I would regularly perform refactorings and component extractions to enhance development efficiency and seamless developer onboarding for new team members. For the back-end I worked with SpringBoot and Java to build robust RESTful APIs that would handle the business logic. I also worked on the database schema and queries to ensure that the data was stored and retrieved correctly. Our team used JIRA and Confluence to manage our tasks and facilitate Agile development. We would have daily stand-ups to discuss our progress, and to promote collaboration"
const Experience = () => {  
  const [isDappworksExpanded, setDappworksExpanded] = useState(false);
  const [isAristaExpanded, setAristaExpanded] = useState(false);  
  const [isArloExpanded, setArloExpanded] = useState(false);  

  return (  
    <div id='exp' className='experience-section'>  
      <div className='experience-container'>  
        <div className='mt-10'>  
          <p className='title'>Work Experience</p>  
        </div>

        <div className='experience-item'>  
          <div className='image-grid'>  
            {[Arista].map((image, index) => (  
              <div key={index} className='image-wrapper'>  
                <img className="image" src={image} alt='' />  
              </div>  
            ))}  
          </div>  
          <div className='details'>  
            <p className='company'>Arista Networks</p>  
            <p className='position'>Software Engineer Intern</p>  
            <p className='date'>January 2025 - Present</p>  
            <button className='toggle-btn' onClick={() => setAristaExpanded(!isAristaExpanded)}>  
              {isAristaExpanded ? 'Show Less' : 'Show More'}  
            </button>  
            {isAristaExpanded && (  
              <p className='description'>{"Member of the DMF Software Team. Working on the Analytics Node project using Java, Python, JavaScript and React."}</p>  
            )}  
          </div>  
        </div>  
        
        {/* Dappworks Experience */}  
        <div className='experience-item'>  
          <div className='image-grid'>  
            {[Dappworks].map((image, index) => (  
              <div key={index} className='image-wrapper'>  
                <img className="image" src={image} alt='' />  
              </div>  
            ))}  
          </div>  
          <div className='details'>  
            <p className='company'>Dappworks Technology Inc.</p>  
            <p className='position'>Full-Stack Developer Intern</p>  
            <p className='date'>May, 2024 - December 2024</p>  
            <button className='toggle-btn' onClick={() => setDappworksExpanded(!isDappworksExpanded)}>  
              {isDappworksExpanded ? 'Show Less' : 'Show More'}  
            </button>  
            {isDappworksExpanded && (  
              <p className='description'>{DAPPWORKS_TEXT}</p>  
            )}  
          </div>  
        </div>  

        {/* Arlo Experience */}  
        <div className='experience-item'>  
          <div className='image-grid'>  
            {[Arlo].map((image, index) => (  
              <div key={index} className='image-wrapper'>  
                <img className="image" src={image} alt='' />  
              </div>  
            ))}  
          </div>  
          <div className='details'>  
            <p className='company'>Arlo Technologies</p>  
            <p className='position'>Software Engineer in Test Intern</p>  
            <p className='date'>August, 2022 - September, 2023</p>  
            <button className='toggle-btn' onClick={() => setArloExpanded(!isArloExpanded)}>  
              {isArloExpanded ? 'Show Less' : 'Show More'}  
            </button>  
            {isArloExpanded && (  
              <p className='description'>  
                Involved in Python scripting to test Arlo Smart Home Security products as well as maintaining device firmware deployment pipeline. Worked closely alongside Firmware, Software, and Product teams to discuss and fix bugs for new products and releases. Contributed to the successful launch of the Arlo Security Hub and its surrounding ecosystem such as Sensors, Sirens, and Keypad.  
              </p>  
            )}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Experience;
