import {useState, useRef} from "react";

function Timer(){
    const [time,setTime]= useState(0);
    const isID = useRef(null);
    function handleStart(){
        if (!isID.current){
            isID.current = setInterval(()=>{
                setTime((time)=>time+1)
            },1000)
        }
    }
    function handleStop(){
        clearInterval(isID.current);
        isID.current = null;
    }
    function handleReset(){
        handleStop();
        setTime(0);
    }
    return (
        <>
            <h1>Timer App</h1>
            <h3>{time}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Timer;