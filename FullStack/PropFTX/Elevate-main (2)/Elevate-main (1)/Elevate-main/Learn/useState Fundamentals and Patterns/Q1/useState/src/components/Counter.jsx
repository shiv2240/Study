import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev => prev+1)
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button>Decrement</button>
    </>
  );
};

export default Counter;
