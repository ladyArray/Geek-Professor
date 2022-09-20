import React from "react";
import "./estilitos.css";

export const Tarjeta = ({onClick}) => {
  return (

    <div className="cuerpito">
      <div class="container">
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Teoria &#128218; </h2>
            <p>
            “Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber”. Albert Einstein.
            </p>
            <a href="#" onClick={() => onClick('Teoria')}>Ver apuntes</a>
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Ejercicios &#9997;</h2>
            <p>
            “Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber”. Albert Einstein.</p>
            <a href="#" onClick={() => onClick('Ejercicios')}>A tope</a>
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Diario &#128214;</h2>
            <p>
            “Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber”. Albert Einstein.
            </p>
            <a href="#" >Mira esto</a>
          </div>
        </div>
        <div class="box">
      <span></span>
      <div class="content">
        <h2>Recursos &#128204;</h2>
        <p>“Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber”. Albert Einstein.<br/></p>
        <a href="#">Un extra </a>
      </div>
        </div>
      </div>
    </div>

    
  );
};
