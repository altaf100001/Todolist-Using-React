import React from "react";

export const Counter = ( {initialValue} ) =>{
    const [count,setCount] = React.useState(initialValue)

    return(
        <div>
        <h1>Counter App : {count}</h1>
        <button onClick={() => {setCount(count+1)}}>incre</button>
        <button onClick={() => {setCount(count-1)}}>decre</button>
        </div>
    )
}