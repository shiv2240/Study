import { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const isTime = useRef(null);
  function handleStart() {
    if (!isTime.current) {
      isTime.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  }

  function handleStop() {
    clearInterval(isTime.current);
    isTime.current = null;
  }
  function handleReset() {
    handleStop();
    setTime(0);
  }

  return (
    <>
      <h1>Timer</h1>
      <h3>{time}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Timer;
