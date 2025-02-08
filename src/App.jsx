import { ThemeProveder } from "./components/hooks/ContextApi/DarkLight";





export const App = () =>{
  return(
    <ThemeProveder>
      <DarkLight  />
    </ThemeProveder>
    
  );
};
