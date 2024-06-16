import React from 'react'
import Home from './Home/Home'
import Course from './Components/Course'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './Components/context/Authprovider'


function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
  <div>
   <Routes>
    <Route path = "/" element={<Home />}></Route>
    <Route path = "/course" element={authUser?<Courses />:<Navigate to="/signup"></Navigate>}></Route>
    <Route path = "/signup" element={<Signup/>}></Route>
   </Routes>  
    <Toaster />
 </div> 
  )
}

export default App