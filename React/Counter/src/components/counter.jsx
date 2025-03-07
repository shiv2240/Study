import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Timer</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => count>0 && setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default Counter;
