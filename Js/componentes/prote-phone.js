/**INFORMACION DE ALIMENTOS* */

export let alimentospr = document.createElement("div");
alimentospr.innerHTML = 
`<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN CARBOHIDRATOS-->
<div class="InfoAlimento">
    <div class="cphone2">
    <div class="phimagen">
        <img src="./img/proteinas/phone/pollo0.png" alt="" class="ali">
        <img src="./img/proteinas/phone/meat.png" alt="" class="ali">
        <img src="./img/proteinas/phone/pez.png" alt="" class="ali">
        <img src="./img/proteinas/phone/potato.png" alt="" class="ali">
        <img src="./img/proteinas/phone/white.png" alt="" class="ali">
        <img src="./img/proteinas/phone/fide.png" alt="" class="ali">
        <img src="./img/proteinas/phone/cama.png" alt="" class="ali">
        
    </div>
      
    </div>  
    <div class="caja_botones btn">
        <button id="retroceder" class="back">Anterior</button>
        <button id="avanzar" class="next">Siguiente</button>
    </div>
      
    </div>`

    export function CrearPro(){
        let pro = document.querySelector("#esquema");
        pro.appendChild(alimentospr);
    }