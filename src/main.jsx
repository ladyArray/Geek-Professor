import React from 'react'
import ReactDOM from 'react-dom/client'
import MathsApp from './MathsApp'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MathsApp/> 
  </BrowserRouter>
)
