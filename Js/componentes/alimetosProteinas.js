/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**INFORMACION DE ALIMENTOS* */
export let alimentos_pro = document.createElement("div");
alimentos_pro.innerHTML = 
`

<section class="alimentosP">
    <div class="ConoceP">
        <h1 class="tituloA"> Conoce algunos alimentos <br> ricos en proteína</h1>
    </div>
</section>


`;

export function CrearAlimentosPro(){
    let proteina = document.querySelector("#esquema");
    proteina.appendChild(alimentos_pro);
}