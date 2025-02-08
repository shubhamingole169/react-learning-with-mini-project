
import { useBioContext } from './index';



export const Home = () =>{

    const  {myName, myAge} = useBioContext();


    return <h1>Hellow Api my name is  {myName} and im {myAge} years.  </h1>
}