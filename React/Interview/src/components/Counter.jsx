import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
  
    const handleChange = (action) => {
      if (action === "inc") setCount(c => c + 1);
      else if (action === "dec") count>0 && setCount(c => c - 1);
      else setCount(0);
    };
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => handleChange("inc")}>+</button>
        <button onClick={() => handleChange("dec")}>-</button>
        <button onClick={() => handleChange("reset")}>Reset</button>
      </div>
    );
  }
export default Counter;