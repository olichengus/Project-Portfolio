import React from 'react';
import  { useState, useEffect } from 'react';

const TypeWriter = ({text,speed}) => {
    const useTypewriter = (text, speed = 80) => {
        const [displayText, setDisplayText] = useState('');
      
        useEffect(() => {
          let i = 0;
          const typingInterval = setInterval(() => {
            if (i < text.length) {
              setDisplayText(prevText => prevText + text.charAt(i));
              i++;
            } else {
              clearInterval(typingInterval);
            }
          }, speed);
      
          return () => {
            clearInterval(typingInterval);
          };
        }, [text, speed]);
      
        return displayText;
      };
      const displayText = useTypewriter(text, speed);
  return (
    <h2 className='text-4xl sm:text-5xl font-bold text-[#27292f]'>
      {displayText}
    </h2>
  );
};

export default TypeWriter;
