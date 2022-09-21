import { ItemChapter } from "../components/ItemChapter"
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTemaByName } from "../helper/getTemaByName";
import './ChapterDetailPage.css';
import { Tarjeta } from "../components/TarjetasTop/Tarjeta";
import { BtnAtras } from "../components/BtnAtras/BtnAtras";


export const ChapterDetailPage = () => {
    const {chapter} = useParams()
    const [state, setEstado] = useState(
        {
        pdf: getTemaByName(chapter).teoria,
        })

    function onClick(type) {
        switch (type) {
            case 'Teoria':
                setEstado({
                    pdf: getTemaByName(chapter).teoria,
                    })
                break;
            case 'Ejercicios':
                setEstado(
                    {
                    pdf: getTemaByName(chapter).ejercicios,
                    })
                break;
            default:
                break;
        }
    }

  return (
    <>      <BtnAtras/>
            <Tarjeta onClick={onClick}/>
            <iframe className="pdfFrame" src={`../src/data/documentos/${state.pdf}.pdf`} />
        
    </>
  )
}