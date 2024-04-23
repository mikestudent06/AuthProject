import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path= {'/'} element={<Home/>}></Route>
        <Route path= {'/auth/login'} element={<Login/>}></Route>
        <Route path= {'/auth/register'} element={<Register/>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
