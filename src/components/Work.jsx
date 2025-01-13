import React from 'react';  
import Telomeres from '../assets/telomeres.png';  
import Insight from '../assets/Insight.png';  
import WishList from '../assets/wishlist.png';  
import NBA from '../assets/nba.png';  
import Bolt from '../assets/bolt.jpeg';  
import './Work.css'; // Ensure the correct path for CSS  

const projects = [  
  {
    name: "NBA Poeltl Draft Game",  
    image: NBA,  
    link: "https://github.com/olichengus/nba-draft-poeltl-webapp",  
    description: "Python, React, Flask",  
  },  
  {  
    name: "UBC Bolt Case Comp",  
    image: Bolt,  
    link: "https://github.com/olichengus/bolt_datacomp",  
    description: "Python, GCP",  
  },  
  {  
    name: "UBC Elective Finder",  
    image: Insight,  
    link: "https://github.com/olichengus/UBC-Elective-Finder",  
    description: "Node.js, TypeScript, Express.js, React",  
  },  
  {  
    name: "Telomeres Website",  
    image: Telomeres,  
    link: "https://github.com/olichengus/TelomeresWebsite",  
    description: "HTML, CSS, JavaScript",  
  },  
  {  
    name: "Wishlist Application",  
    image: WishList,  
    link: "https://github.com/olichengus/WishList",  
    description: "Java",  
  }
];  

const Work = () => {  
  return (
    <div name='work' id='exp' className='experience-section'>  
    <div className='experience-container'>  
      <div className='mt-10'>  
        <p className='title'>Projects</p>  
      </div>
      <div className='experience-item'>  
        <div className='image-grid'>
        {projects.map((p) => {
            return (
                    <div key={0} className='image-wrapper'>  
                    <div  
                    className="project-card shadow-lg shadow-[#040c16] group rounded-md mx-auto"  
                    style={{  
                        backgroundImage: `url(${p.image})`,  
                        backgroundSize: 'cover',  
                        backgroundPosition: 'center',  
                    }}  
                    >  
                    {/* Hover Effects */}  
                    <div className="overlay flex items-center justify-center">  
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <div className='details'>  
                            <p className='company'>{p.name}</p>  
                            <p className='position'>Java, Flask, Python, React</p>  
                        </div>  
                        <a href={p.link}>  
                            <button className="view-button">View</button>  
                        </a>  
                        </div>  
                    </div>  
                    </div>
                </div> )
        })}  
        </div>
      </div>  
    </div>  
  </div>  
//     <div name="work" className='work-section'>  
//       <div className='work-container'>  
//         <div className='title-container'>  
//           <p className='work-title'>My Projects</p>  
//         </div>  

//         <div className='project-grid'>  
//           {projects.map((project, index) => (  
//             <div key={index} className='project-item'>  
//               <div  
//                 className='project-image'    
//                 onClick={() => setSelectedProject(project)}
//               >  
//                 <div className='image-overlay'>  
//                   <span className='project-name'>{project.name}</span>  
//                   <button className='view-button' onClick={() => window.open(project.link, "_blank")}>View</button>  
//                 </div>  
//               </div>  
//               {selectedProject === project && (  
//                 <div className='project-description'>  
//                   <p>{project.description}</p>  
//                   <button className='close-button' onClick={() => setSelectedProject(null)}>Close</button>  
//                 </div>  
//               )}  
//             </div>  
//           ))}  
//         </div>  
//       </div>  
//     </div>  
//   );
  ) 
};  

export default Work;