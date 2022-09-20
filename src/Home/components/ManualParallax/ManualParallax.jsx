import React from "react";
import "./ManualParallax.css";
import '../ChapterSection/CardHover.css';
import { ChapterSection } from "../ChapterSection/ChapterSection";
import { Temas } from "../../../data/Temas";
import HomeworkSection from "../HomeworkSection/HomeworkSection";

export function ManualParallax() {
  return (
    <div>
      <div className="bgimg-0">
        <div className="caption animate__animated ">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h2 class="animate-charcter border1">Geek Proffesor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="p-2 flex-fill">
          {Temas.map((elemento) => {
            return <ChapterSection key={elemento.imagen} {...elemento} />;
          })}
        </div>
        <div className="p-2 flex-sm-fill hw-forum">
          {/* I will stick to the screen when you reach my scroll position */}
          <HomeworkSection />
        </div>
      </div>



      <div className="bgimg-3">
        <div className="caption" class="animate__animated animate__bounce">
          <span className="border">RM</span>
        </div>
      </div>

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
    </div>
  );
}
