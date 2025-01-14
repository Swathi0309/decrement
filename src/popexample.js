import React from 'react';

function PopExample(){
    const arr=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
    const lastElement=arr.pop();
 return(
    <div>
        {arr.map((value)=>(
         <h1>{value}</h1>
        ))}
    </div>
 );
}

export default PopExample;
//pop method is removing the last element in the array  and return the what will be remove that one is print

