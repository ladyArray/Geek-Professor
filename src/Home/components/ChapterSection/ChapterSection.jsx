import './CardHover.css'
import { Link } from 'react-router-dom'


export const ChapterSection = ({ nombre, imagen, descripcion }) => {
  return (
    <div className={'bgimg-' + imagen}>
      <div className="caption">
        <div class="cardBox">
          <div class="custom-card">
            <h2>{nombre}</h2>
            <div class="contenido">
              <Link to={`/chapter-detail/${nombre}`}><h3>{nombre}</h3></Link>
              <p>{descripcion}</p>
            </div>
          </div>
        </div>
        {/* <span className="border">Sapere Aude</span> */}
      </div>
    </div>
  )
}
