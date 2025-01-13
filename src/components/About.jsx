import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about">  
        <div className="container">  
          <h1 className="title">About</h1>  
          <div className="content">  
            <div className="intro">  
              <p>Hi, I'm <span className="highlight">Oliver</span>, nice to meet you. I hope you enjoy your stay.</p>  
            </div>  
            <div className="description">  
              <p>I am a driven student striving to grow and learn every day - not only as a developer but also as a person. My main technical interests are in Full-Stack Development, Firmware Engineering, Test Automation, and Machine Learning. I thrive in team settings and will do anything a team needs to succeed, even if it is outside my comfort zone. I am also an excellent communicator with both technical and high-level details.</p>  
              <p>In my free time, I love to watch and play sports. The main teams I cheer for are Manchester United and the Toronto Raptors. Fun fact: I am fluent in French because I did French immersion in high school. If you want to reach out to me, please shoot me an email at <a href="mailto:oliverjcheng@gmail.com" className="highlight">oliverjcheng@gmail.com</a>. Have a nice day!</p>  
            </div>  
          </div>  
        </div>  
      </div>  
    )
}

export default About;
