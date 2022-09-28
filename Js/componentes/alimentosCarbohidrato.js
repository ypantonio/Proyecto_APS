/**INFORMACION DE ALIMENTOS* */
export let alimentos_carb = document.createElement("div");
alimentos_carb.innerHTML = 
`

<section class="alimentosC">
    <div class="ConoceC">
        <h1 class="tituloC"> Conoce algunos alimentos <br> ricos en carbohidratos</h1>
        <h1 class="tituloD"> Alimentos <br> ricos en proteína</h1>
    </div>
</section>
<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN CARBOHIDRATOS-->
<div class="InfoAlimento">
    <div class="carousel">
        <div id="imagen" class="contenido"></div>
        <div class="caja_botones">
            <button id="retroceder" class="back">Retroceder</button>
            <button id="avanzar" class="next">Avanzar</button>
        </div>
    </div>
</div>


`;

export function CrearAlimentosCarbo(){
    let carbo = document.querySelector("#alimentoC");
    carbo.appendChild(alimentos_carb);
}