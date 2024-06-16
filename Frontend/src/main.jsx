import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Authprovider from './Components/context/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Authprovider>
   <App />
   </Authprovider>
  </BrowserRouter>
   
 
)
