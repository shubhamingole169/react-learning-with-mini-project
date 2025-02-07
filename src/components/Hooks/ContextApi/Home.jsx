import { useContext } from "react"
import { BioContext } from "."


export const Home = () =>{

    const  {myName, myAge} = useContext(BioContext);


    return <h1>Hellow Api my name is  {myName} and im {myAge} years.  </h1>
}