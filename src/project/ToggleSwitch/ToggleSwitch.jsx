import { useState } from "react"
import "./ToggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () =>{
        setIsOn(!isOn);
    };
    const checkIsOn = isOn ? "on" : "off"
    return(
        <>
        <h1 style={{color:"000", textAlign:"center"}}> Toggle Switch <IoIosSwitch /> </h1>
        <div className="toggle-switch" onClick={handleToggleSwitch}>
        <div className= {`switch ${checkIsOn}`}>
            <span className="switch-state"> {checkIsOn} </span>
        </div>
        </div>
        </>
    )
}