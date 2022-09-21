import './CardHover.css'
import { useContext } from "react"
import { AuthContext } from "../../../auth/context/AuthContext"
import { useNavigate } from 'react-router-dom'


export const ChapterSection = ({nombre, imagen, descripcion}) => {

  const {logged} = useContext(AuthContext)
  const navigate = useNavigate();

  function onClick(){
    if(logged){
      navigate(`/chapter-detail/${nombre}`,{
        replace: true
      });
    }else{
      alert('Debes iniciar sesión para poder ver el contenido')
    }
    
  }

  return (
    <div className={'bgimg-'+imagen}>
        <div className="caption">
          <div class="cardBox">
            <div class="custom-card">              
              <h2>{nombre}</h2>
              <div class="contenido" onClick={() => onClick()}>
                {/* {
                  logged
                  ? <Link to={`/chapter-detail/${nombre}`}><h3>{nombre}</h3></Link>
                  : <h3>{nombre}</h3>
                } */}
                <h3>{nombre}</h3>
              
                <p>{descripcion}</p>
              </div>
            </div>
          </div>
          {/* <span className="border">Sapere Aude</span> */}
        </div>
      </div>
  )
}
