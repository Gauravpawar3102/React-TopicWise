import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';
  const handleClick = () => {};
  return (
    <section>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </section>
  );
};

export default ErrorExample;
