import { useState } from "react";

export const LiftState = () =>{
    const [inputValue, setInputValue] = useState("");
    return(
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    );
};


const InputComponent = ({ inputValue, setInputValue }) =>{
    return(
        <>
            <input
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChange={(e) =>{setInputValue(e.target.value)}}
            ></input>
        </>
    )
}



const DisplayComponent = ({inputValue}) =>{
    return(
        <p> the text enetr is :{inputValue}</p>
    )
}