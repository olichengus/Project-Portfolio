import React from 'react';

const TypeWriter = ({text,speed}) => {
    const displayText = useTypewriter(text, speed);
  return (
    <p>
      {displayText}
    </p>
  );
};

export default TypeWriter;
