import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=> count>0 && setCount(count-1)}>-</button>
        </>
    )
}
export default Counter;