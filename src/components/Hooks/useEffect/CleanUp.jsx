import { useEffect, useState } from "react"
import "./index.css"

export const CleanUp = () =>{
    const [count, setCount] = useState(0);


    useEffect(() =>{
        const interval = setInterval(() =>{
            setCount((prev) => prev+1);
        } , 1000);

        return () => clearInterval(interval);
    }, [])

    return(
        <div className="container">
            <div className="container">
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="tittle">real time counter</h3>
            </div>
        </div>
    )
}