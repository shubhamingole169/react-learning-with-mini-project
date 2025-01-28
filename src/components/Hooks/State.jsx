import { useState } from "react"
import "../EV.css"
export const State = () =>{
    // let value = 0;
    // const handleButtonClick = () =>{
    //     value = value +1;
    //     console.log(value);
    // }

        // console.log(useState());
        
        const [count, setCount] = useState(0);
        const handleButtonCount = () =>{
            setCount(() => count + 1 );
        };
    return(
        <>
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonCount}>Increment</button>
        </section>
        </>
    )
}