import { useNavigate } from "react-router-dom"
import './BtnAtras.css'

export const BtnAtras = () => {
    const navigate = useNavigate();

  return (
    <button type="button" class="btn btn-primary btn-atras" onClick={() => navigate('/home', {replace: true})}>Volver</button>
  )
}
