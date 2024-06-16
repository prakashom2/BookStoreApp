import React from 'react'
import Home from './Home/Home'
import Course from './Components/Course'
import { Route, Router, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'


function App() {
  return (
  <div>
   <Routes>
    <Route path = "/" element={<Home />}></Route>
    <Route path = "/course" element={<Courses />}></Route>
    <Route path = "/signup" element={<Signup/>}></Route>
   </Routes>

 </div> 
  )
}

export default App