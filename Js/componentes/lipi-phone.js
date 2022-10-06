/**INFORMACION DE ALIMENTOS* */

export let alimentoslp = document.createElement("div");
alimentoslp.innerHTML = 
`<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN CARBOHIDRATOS-->
<div class="InfoAlimento">
    <div class="cphone2">
    <div class="phimagen">
        <img src="./img/lipidos/phone/quilla.png" alt="" class="ali">
        <img src="./img/lipidos/phone/Anegra.png" alt="" class="ali">
        <img src="./img/lipidos/phone/cblanco.png" alt="" class="ali">
        <img src="./img/lipidos/phone/coco0.png" alt="" class="ali">
        <img src="./img/lipidos/phone/aOliva.png" alt="" class="ali">
        <img src="./img/lipidos/phone/toci.png" alt="" class="ali">
        <img src="./img/lipidos/phone/toma.png" alt="" class="ali">
        
    </div>
      
    </div>  
    <div class="caja_botones btn">
        <button id="retroceder" class="back">Anterior</button>
        <button id="avanzar" class="next">Siguiente</button>
    </div>
      
    </div>`

    export function CrearLip(){
        let lipi = document.querySelector("#Info_Li");
        lipi.appendChild(alimentoslp);
    }