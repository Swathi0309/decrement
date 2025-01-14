import React from 'react';

function Names2(){
    const names=["swathi","swapna","sruthi","shivani","sony","siri"];

    const firstElement=names.unshift("uma","swetha");
    return(
        <div>
            {names.map((names,index)=>(
                <p>{names}</p>
            ))}
        </div>
    )
}

export default Names2;