import {NavigationElement} from "./commonComponents/NavigationElement";
import { Route, Routes } from "react-router-dom";
import { Test } from "./commonComponents/testPage";

function App() {
  

  return (
    <>
     <NavigationElement/> 
     <Routes>
      <Route path="/test" element={<Test/>}/>
     </Routes>
    </>
  )
}

export default App;
