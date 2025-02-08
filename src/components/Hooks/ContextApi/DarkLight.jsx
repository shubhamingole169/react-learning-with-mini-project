import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProveder = ({children}) =>{
    const [theme, setTheme] = useState("dark");

         <p> Hellow !! this is react practice</p>
            <button onClick={ () => handleToggleTheme}>Switch to light mode </button>
        </div>
    )
}