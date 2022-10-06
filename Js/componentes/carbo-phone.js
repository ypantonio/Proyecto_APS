/**INFORMACION DE ALIMENTOS* */


export let alimentoscarb = document.createElement("div");
alimentoscarb.innerHTML = 
`<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN CARBOHIDRATOS-->
<div class="InfoAlimento">
    <main class="cphone2">
        
      
    </main>  
    <div class="caja_botones btn">
        <button id="retroceder" class="back">Anterior</button>
        <button id="avanzar" class="next">Siguiente</button>
    </div>
      
    </div>`

    export function CrearCarbo(){
        let carbo = document.querySelector("#alimentoC");
        carbo.appendChild(alimentoscarb);
    }
