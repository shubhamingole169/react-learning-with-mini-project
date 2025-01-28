import { useState } from "react"
import "./ToggleSwitch.css"
export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () =>{
        setIsOn(!isOn);
    };
    const checkIsOn = isOn ? "on" : "off"
    return(
        <div className="toggle-switch" onClick={handleToggleSwitch}>
        <div className= {`switch ${checkIsOn}`}>
            <span className="switch-state"> {checkIsOn} </span>
        </div>
        </div>
    )
}