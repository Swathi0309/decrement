import React from "react";

function Button(props){
    const click=props;
    return (
        <div>
            <button onClick={click}>Click me</button>
        </div>
    )
}


export default Button;