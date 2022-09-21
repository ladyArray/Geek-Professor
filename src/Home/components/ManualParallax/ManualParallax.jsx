import React from "react";
import "./ManualParallax.css";
import '../ChapterSection/CardHover.css';
import { ChapterSection } from "../ChapterSection/ChapterSection";
import { Temas } from "../../../data/Temas";
import { SignBtn } from "../SignBtn/SignBtn";
import { AuthContext } from "../../../auth/context/AuthContext"
import { useContext } from "react"
import HomeworkSection from "../HomeworkSection/HomeworkSection";
import "bootswatch/dist/vapor/bootstrap.min.css";



export function ManualParallax() {

  const {logged, user} = useContext(AuthContext)

  return (
    <div>
      <SignBtn/>
      <div className="bgimg-0">
        <div className="caption animate__animated ">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h2 class="animate-charcter border1">
                  {
                    logged 
                    ? `${user}, bienvenido a GeekProffesor`
                    : `Geek Proffesor`
                  }
                  </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className={`p-2 $ ${logged ? 'w-75' : 'flex-fill'}`}>
          {Temas.map((elemento) => {
            return <ChapterSection key={elemento.imagen} {...elemento} />;
          })}
        </div>
        {
          logged
          ? (<div className="p-2 flex-fill hw-forum">
          <HomeworkSection />
          </div>)
          :<></>
        }
      </div>

      {/* <div className="row">
        <div className="col-7">
          {Temas.map((elemento) => {
            return <ChapterSection key={elemento.imagen} {...elemento} />;
          })}
        </div>
        {
          logged
          ? (<div className="col-5 hw-forum">
          <HomeworkSection />
          </div>)
          :<></>
        }
        
      </div> */}



      <div className="bgimg-13 justify-content-center">
        {/* <div className="caption animate__animated animate__bounce"> */}
          {/* <span className="border"> </span> */}
        {/* </div> */}
        <div className="card text-white bg-secondary mb-3" style={{maxWidth: 200 + 'rem'}}>
          <div className="card-header">Geek Proffesor</div>
          <div className="card-body">
            <h4 className="card-title">Website made by:</h4>
            <p className="card-text">David Alonso, Rafael Miñana, Regy Rodriguez, Sergio Rodriguez, Domenica Russo</p>
            <p className="card-text">Made with love for Héroes y heronías HIBERUS 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
      {/* ."-,.__
                 `.     `.  ,
              .--'  .._,'"-' `.
             .    .'         `'
             `.   /          ,'
               `  '--.   ,-"'
                `"`   |  \
                   -. \, |
                    `--Y.'      ___.
                         \     L._, \
               _.,        `.   <  <\                _
             ,' '           `, `.   | \            ( `
          ../, `.            `  |    .\`.           \ \_
         ,' ,..  .           _.,'    ||\l            )  '".
        , ,'   \           ,'.-.`-._,'  |           .  _._`.
      ,' /      \ \        `' ' `--/   | \          / /   ..\
    .'  /        \ .         |\__ - _ ,'` `        / /     `.`.
    |  '          ..         `-...-"  |  `-'      / /        . `.
    | /           |L__           |    |          / /          `. `.
   , /            .   .          |    |         / /             ` `
  / /          ,. ,`._ `-_       |    |  _   ,-' /               ` \
 / .           \"`_/. `-_ \_,.  ,'    +-' `-'  _,        ..,-.    \`.
.  '         .-f    ,'   `    '.       \__.---'     _   .'   '     \ \
' /          `.'    l     .' /          \..      ,_|/   `.  ,'`     L`
|'      _.-""` `.    \ _,'  `            \ `.___`.'"`-.  , |   |    | \
||    ,'      `. `.   '       _,...._        `  |    `/ '  |   '     .|
||  ,'          `. ;.,.---' ,'       `.   `.. `-'  .-' /_ .'    ;_   ||
|| '              V      / /           `   | `   ,'   ,' '.    !  `. ||
||/            _,-------7 '              . |  `-'    l         /    `||
. |          ,' .-   ,' ||               | .-.        `.      .'     ||
 `'        ,'    `".'    |               |    `.        '. -.'       `'
          /      ,'      |               |,'    \-.._,.'/'
          .     /        .               .       \    .''
        .`.    |         `.             /         :_,'.'
          \ `...\   _     ,'-.        .'         /_.-'
           `-.__ `,  `'   .  _.>----''.  _  __  /
                .'        /"'          |  "'   '_
               /_|.-'\ ,".             '.'`__'-( \
                 / ,"'"\,'               `/  `-.|" RM */}

}
