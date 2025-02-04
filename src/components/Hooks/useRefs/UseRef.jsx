import { useRef } from "react";
import "./index.css";

export const UseRef = () =>{

    const username = useRef();
    const password = useRef();

    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username} />
            <br />
            <input type="text" id="password" ref={password} />
            <br />
            <button>Submit</button>
        </form>
    )
}