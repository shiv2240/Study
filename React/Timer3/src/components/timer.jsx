import { useState, useRef, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isrunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    if (!isrunning) {
      return;
    }
    interval.current = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(interval.current);
    };
  }, [time, isrunning]);
  const handleStart = () => {
    setIsRunning(true);
  };
  function handleStop() {
    setIsRunning(false);
    clearInterval(interval);
  }
  function handleReset() {
    setIsRunning(false);
    setTime(0);
  }
  return (
    <>
      <div> Timer App</div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Timer;
