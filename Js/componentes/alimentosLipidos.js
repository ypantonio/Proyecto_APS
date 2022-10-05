/**INFORMACION DE ALIMENTOS* */
export let alimentos_lip = document.createElement("div");
alimentos_lip.innerHTML = 
`

<section class="alimentosC">
    <div class="ConoceC">
        <h1 class="tituloC"> Conoce algunos alimentos <br> ricos en lípidos</h1>
        <h1 class="tituloD"> Alimentos <br> ricos en lípidos</h1>
    </div>
</section>
<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN Lipidos-->
<div class="InfoAlimento">
    <div class="carousel cphone" >
    <div id="imagen" class="contenido"></div>

        <div class="caja_botones">
            <button id="retroceder" class="back">Anterior</button>
            <button id="avanzar" class="next">Siguiente</button>
        </div>
    </div>

   
</div>
</div>


`;

export function CrearAlimentosLip(){
    let lipi = document.querySelector("#Info_Li");
    lipi.appendChild(alimentos_lip);
}