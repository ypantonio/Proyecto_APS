/**INFORMACION DE ALIMENTOS* */

export let alimentoscarb = document.createElement("div");
alimentoscarb.innerHTML = 
`<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN CARBOHIDRATOS-->
<div class="InfoAlimento">
    <div class="cphone2">
    <div class="phimagen">
        <img src="./img/carbohidratos/celular/banano.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/Cebolla.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/Piña.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/Calabaza.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/saladas.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/avena.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/dona.png" alt="" class="ali">
        <img src="./img/carbohidratos/celular/blanco.png" alt="" class="ali">
    </div>
      
    </div>  
    <div class="caja_botones btn">
        <button id="retroceder" class="back">Anterior</button>
        <button id="avanzar" class="next">Siguiente</button>
    </div>
      
    </div>`

    export function CrearCarbo(){
        let carbo = document.querySelector("#alimentoC");
        carbo.appendChild(alimentoscarb);
    }