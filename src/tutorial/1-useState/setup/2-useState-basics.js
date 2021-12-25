import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random Title');
  const handler = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
