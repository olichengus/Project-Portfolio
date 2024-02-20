import React from 'react';
import  { useState, useEffect } from 'react';

const TypeWriter = ({text,speed}) => {
    const displayText = useTypewriter(text, speed);
    const useTypewriter = (text, speed = 50) => {
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
  return (
    <h2>
      {displayText}
    </p>
  );
};

export default TypeWriter;
