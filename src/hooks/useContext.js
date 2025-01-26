import React,{useContext} from "react"
import { storeContext,MovieInfoContext } from "../App"

export function UseContext(){
    const movieData=useContext(MovieInfoContext)
    return(
        <>
         <div>
          <h4>{JSON.stringify(movieData)}</h4>
        </div>
        </>
    )
}

export function Context(){
    const value=useContext(storeContext)
    return(
        <div>
            {JSON.stringify(value)}
        </div>
    )
}