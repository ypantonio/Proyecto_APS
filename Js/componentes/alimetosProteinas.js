/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**INFORMACION DE ALIMENTOS* */
export let alimentos_pro = document.createElement("div");
alimentos_pro.innerHTML = 
`

<section class="alimentosP">
    <div class="ConoceP">
        <h1 class="tituloA"> Conoce algunos alimentos <br> ricos en proteína</h1>
    </div>
    <div class="carousel">
        <div id="imagen"></div>
        <button id="retroceder">Retroceder</button>
        <button id="avanzar">Avanzar</button>
    </div>
</section>
`;

export function CrearAlimentosPro(){
    let proteina = document.querySelector("#esquema");
    proteina.appendChild(alimentos_pro);
}