import React from "react";
import { useState } from "react";


const Hooks=()=>{

    const[value,setValue]=useState(0);

    const handleIncrement=()=>{
        setValue(value+1);
    }
    const handleClear=()=>{
        setValue(0);
    }

    const handleDecrement=()=>{
        setValue(value-1);
    }
    return(
        <div>
            <h1>usestate hook is used for to update the value </h1>
            {value}
            <button onClick={handleIncrement}>incrementValue</button>
            <button onClick={handleClear}>Reset</button>
            <button onClick={handleDecrement}>DecrementValue</button>
        </div>
    )
}  

export default Hooks;