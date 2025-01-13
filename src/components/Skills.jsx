import React from 'react';  
import Python from '../assets/python.png';  
import Typescript from '../assets/Typescript.png';  
import C from '../assets/cplus.png';  
import Java from '../assets/java.png';  
import SQL from '../assets/sql2.png';  
import './Skills.css'; // Assuming you have a Skills.css file  

const Skills = () => {  
  return (  
    <div className='skills-section'>  
      <div className='skills-container max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>  
        <div name="skills">  
          <p className='title'>Skills</p>  
        </div>  
        <div className='skills-grid grid grid-cols-2 sm:grid-cols-4 gap-6 py-9'>  
          {[  
            { src: Python, name: "Python" },  
            { src: Typescript, name: "TypeScript" },  
            { src: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true", name: "HTML" },  
            { src: Java, name: "Java" },  
            { src: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true", name: "JavaScript" },  
            { src: C, name: "C/C++" },  
            { src: "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true", name: "React" },  
            { src: SQL, name: "SQL" }  
          ].map((skill, index) => (  
            <div key={index} className='skill-card'>  
              <img className="skill-icon" src={skill.src} alt={skill.name} />  
              <p className='skill-name'>{skill.name}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Skills;
