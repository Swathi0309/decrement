let a=5;
let b=6;
export function Every(){
    const add=a+b;
 return (
    <div>
        {add}
    </div>
 )
}

export function Shift(){
    const sub=a-b;
    return(
        <div>
            {sub}
        </div>
    )
}

export function Push(){
    const mul=a*b;
    return(
        <div>
            {mul}
        </div>
    )
}

export function Some(){
    const mod=a%b;
    return(
        <div>
            {mod}
        </div>
    )
}
