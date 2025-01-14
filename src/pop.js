import React from 'react';

const arr=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]

function Pop(){
 return(
    <div>
        {arr.pop((value)=>(
         <h1>{value}</h1>
        ))}
    </div>
 );
}

export default Pop;
//pop method is removing the last element in the array  and return the what will be remove that one is print

