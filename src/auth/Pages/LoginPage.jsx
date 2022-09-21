import React from 'react'
import "./estilos.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { checkCredentials } from '../helper/checkCredentials'
import { AuthContext } from '../context/AuthContext'


export const LoginPage = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext)
  const {name, password, onInputChange, onResetForm} = useForm({
    name: '',
    password: ''
  })


  function onSubmit(e) {
    e.preventDefault()
    if(checkCredentials(name, password)){
      console.log(name, password);
      navigate('/',{
        replace: true
      });
      login(name)
      onResetForm()
    } else{
      alert('Credenciales incorrectas')
    }
  }

  return (
    
    <>
    <div className="cuerpazo">
      <div class="login-box">
      <h2>Login</h2>
      <form >
        <div class="user-box">
          <input 
            type="text"
            name="name"
            required=""
            onChange={onInputChange}
            value={name}
            />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input 
            type="password"
            name="password"
            required=""
            onChange={onInputChange}
            value={password}
            />
          <label>Password</label>
        </div>
        <a href="#" onClick={(e) => onSubmit(e)}>
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



