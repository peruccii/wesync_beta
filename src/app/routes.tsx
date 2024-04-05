
import { Route, Routes } from "react-router-dom";
import FirstPage from "./app";

function App(){
  return (
    <Routes>
      <Route path="/wesync" element={<FirstPage/>}> </Route>
    </Routes>
  )
}

export default App