import { BioProvider } from "./components/hooks/ContextApi";
import { Home } from "./components/hooks/ContextApi/Home";




export const App = () =>{
  return(
    <BioProvider>
      <Home  />
    </BioProvider>
    
  );
};
