import React, { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

   const handleClick = () => {
    setInterval(()=>{
        setCount(prev=>prev+1)
    },1000)
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default Timer;
