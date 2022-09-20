import React from 'react'
import "./estilos.css"
import { Link } from 'react-router-dom'


export const LoginPage = () => {
  return (
    
    <>
    <div className="cuerpazo">
      <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
        </div>
    </div>
  </>
  )
}


