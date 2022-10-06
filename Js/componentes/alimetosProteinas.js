/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**INFORMACION DE ALIMENTOS* */
export let alimentos_pro = document.createElement("div");
alimentos_pro.innerHTML = 
`

<section class="alimentosP">
    <div class="ConoceP">
        <h1 class="tituloA"> Conoce algunos alimentos <br> ricos en proteína</h1>
        <h1 class="tituloB"> Conoce algunos alimentos <br> ricos en proteína</h1>
    </div>
    
</section>
<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN PROTEINAS-->
    <div class="InfoAlimento">
        <div class="carousel">
            <div id="imagen" class="contenido"></div>
            <div class="caja_botones">
                <button id="retroceder" class="back">Retroceder</button>
                <button id="avanzar" class="next">Avanzar</button>
            </div>
        </div>
    </div>
`

export function CrearAlimentosPro(){
    let proteina = document.querySelector("#esquema");
    proteina.appendChild(alimentos_pro);
}
