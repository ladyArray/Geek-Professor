import { ItemChapter } from "../components/ItemChapter"
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTemaByName } from "../helper/getTemaByName";
import './ChapterDetailPage.css';
import { Tarjeta } from "../components/TarjetasTop/Tarjeta";


export const ChapterDetailPage = () => {
    const {chapter} = useParams()
    const [state, setEstado] = useState(
        {
        pdf: getTemaByName(chapter).teoria,
        })
    console.log(chapter)
    const tipos = [
        {
            nombre: 'Teoria',
            color: '#e1d2ff'
        },
        {
            nombre: 'Ejercicios',
            color: '#fde1ac'
        },
        {
            nombre: 'Diario',
            color: '#bae5f5'
        },
        {
            nombre: 'Recursos',
            color: '#ccefbf'
        }
    ]

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
    <>      
            <Tarjeta onClick={onClick}/>
            <iframe className="pdfFrame" src={`../src/data/documentos/${state.pdf}.pdf`} />
        
    </>
  )
}