import { useState } from "react";
import { useReducer } from "react";


export const ReducerComp = () =>{

    const reducer = (state, action) =>{
        console.log(state, action);
        switch (type) {
            case INCREMENT:
                
                break;
        
            default:
                break;
        }

    }
    const [count, dispatch] = useReducer(ReducerComp, 0);
    console.log(useReducer(reducer, 0));
    return <>
        <div className=" p-4 h-lvh flex flex-col justify justify-center ">
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    </>
}