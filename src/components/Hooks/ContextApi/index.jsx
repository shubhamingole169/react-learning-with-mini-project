import { createContext, useContext } from "react";


// 1 steap
export const BioContext = createContext();

// 2nd step

export const BioProvider = ({children}) =>{

    console.log(children)

    const myName = "shubham";
    const myAge = 25;

    return <BioContext.Provider value={{myName, myAge}}>
        {children}
    </BioContext.Provider>
};

//custom hook

export const useBioContext = () => {
    const context = useContext(BioContext);
    if(context === undefined){
        throw new Error("component is  outside ");
    }
    return context;
}