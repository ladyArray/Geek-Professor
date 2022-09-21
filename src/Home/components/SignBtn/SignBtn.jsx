import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../auth/context/AuthContext"
import './SignBtn.css'

export const SignBtn = () => {
    const {logged, logout} = useContext(AuthContext)
    const navigate = useNavigate();


    function onClickLogout(){
        navigate('/login', {replace: true})
        logout()
    }
  return (
    
    <div className="btn-container">
    {
      logged 
      ? <button type="button" class="btn btn-primary signBtn" onClick={() => onClickLogout()}>Logout</button>
      : <button type="button" class="btn btn-primary signBtn" onClick={() => navigate('/login', {replace: true})}>Login</button>
    
    }
    </div>
  )
}
